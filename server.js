const crypto = require("node:crypto");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { WebSocketServer, WebSocket } = require("ws");

const DEFAULT_STUN_URLS = ["stun:stun.l.google.com:19302"];
const PUBLIC_ROOT_FILES = new Set([
    "index.html",
    "script.js",
    "style.css",
    "algorithm-visualizer.mjs",
    "avatar.jpg",
    "conan.png",
]);
const MIME_TYPES = {
    ".css": "text/css; charset=utf-8",
    ".gif": "image/gif",
    ".html": "text/html; charset=utf-8",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
};
const ROOM_CODE_PATTERN =
    /^[a-z0-9][a-z0-9_-]{3,35}$/i;
const MAX_ROOMS = 1000;
const MAX_ROOM_WAIT_MS = 10 * 60 * 1000;
const MAX_MESSAGES_PER_WINDOW = 100;
const MESSAGE_WINDOW_MS = 10 * 1000;

function parseUrlList(value, fallback) {
    const urls = value
        ? value.split(",").map((url) => url.trim()).filter(Boolean)
        : fallback;
    if (!urls.length || urls.some((url) => !/^(stun|stuns|turn|turns):/i.test(url))) {
        throw new Error("STUN_URLS and TURN_URLS must contain valid ICE URLs.");
    }
    return urls;
}

function createIceServers(environment) {
    const stunUrls = parseUrlList(environment.STUN_URLS, DEFAULT_STUN_URLS);
    const iceServers = stunUrls.map((url) => ({ urls: url }));
    const turnUrls = environment.TURN_URLS
        ? parseUrlList(environment.TURN_URLS, [])
        : [];
    const turnSecret = environment.TURN_SHARED_SECRET || "";
    if (turnUrls.length && turnSecret.length < 32) {
        throw new Error("TURN_SHARED_SECRET must contain at least 32 characters.");
    }
    if (!turnUrls.length && turnSecret) {
        throw new Error("Set TURN_URLS together with TURN_SHARED_SECRET.");
    }
    return { iceServers, turnUrls, turnSecret };
}

function isAllowedOrigin(origin, hostHeader, allowedOrigins) {
    if (typeof origin !== "string" || !hostHeader) {
        return false;
    }
    let parsedOrigin;
    try {
        parsedOrigin = new URL(origin);
    } catch {
        return false;
    }
    if (allowedOrigins.size) {
        return allowedOrigins.has(parsedOrigin.origin);
    }
    return parsedOrigin.host.toLowerCase() === hostHeader.toLowerCase();
}

function sendSocketMessage(socket, message) {
    if (socket.readyState !== WebSocket.OPEN) {
        return false;
    }
    socket.send(JSON.stringify(message), (error) => {
        if (error) {
            socket.terminate();
        }
    });
    return true;
}

function createTransferServer({ root = __dirname, env = process.env } = {}) {
    const publicRoot = fs.realpathSync(root);
    const allowedOrigins = new Set(
        (env.ALLOWED_ORIGINS || "")
            .split(",")
            .map((origin) => origin.trim())
            .filter(Boolean)
            .map((origin) => new URL(origin).origin)
    );
    const iceConfiguration = createIceServers(env);
    const rooms = new Map();
    const server = http.createServer((request, response) => {
        void handleHttpRequest(request, response);
    });
    const webSocketServer = new WebSocketServer({
        noServer: true,
        maxPayload: 64 * 1024,
        perMessageDeflate: false,
    });

    async function handleHttpRequest(request, response) {
        const requestUrl = new URL(request.url, "http://localhost");
        if (requestUrl.pathname === "/favicon.ico") {
            response.writeHead(204, { "cache-control": "public, max-age=86400" });
            response.end();
            return;
        }
        if (requestUrl.pathname === "/health") {
            if (!["GET", "HEAD"].includes(request.method)) {
                response.writeHead(405, { allow: "GET, HEAD" });
                response.end("Method not allowed");
                return;
            }
            response.writeHead(200, {
                "content-type": "application/json; charset=utf-8",
                "cache-control": "no-store",
                "x-content-type-options": "nosniff",
            });
            response.end(request.method === "HEAD" ? "" : JSON.stringify({ status: "ok" }));
            return;
        }
        if (requestUrl.pathname === "/ice-servers") {
            if (request.method !== "GET") {
                response.writeHead(405, { allow: "GET" });
                response.end("Method not allowed");
                return;
            }
            const iceServers = [...iceConfiguration.iceServers];
            if (iceConfiguration.turnUrls.length) {
                const expiresAt = Math.floor(Date.now() / 1000) + 3600;
                const username = `${expiresAt}:${crypto.randomUUID()}`;
                const credential = crypto
                    .createHmac("sha1", iceConfiguration.turnSecret)
                    .update(username)
                    .digest("base64");
                iceServers.push({
                    urls: iceConfiguration.turnUrls,
                    username,
                    credential,
                });
            }
            response.writeHead(200, {
                "content-type": "application/json; charset=utf-8",
                "cache-control": "no-store",
                "x-content-type-options": "nosniff",
            });
            response.end(request.method === "HEAD" ? "" : JSON.stringify({ iceServers }));
            return;
        }
        if (!["GET", "HEAD"].includes(request.method)) {
            response.writeHead(405, { allow: "GET, HEAD" });
            response.end("Method not allowed");
            return;
        }

        let pathname;
        try {
            pathname = decodeURIComponent(requestUrl.pathname).replace(/\\/g, "/");
        } catch {
            response.writeHead(400);
            response.end("Invalid URL path");
            return;
        }
        const segments = pathname.split("/").filter(Boolean);
        if (!segments.length) {
            segments.push("index.html");
        }
        const isRootFile = segments.length === 1 &&
            PUBLIC_ROOT_FILES.has(segments[0]);
        const isAsset = segments[0] === "assets" && segments.length > 1 &&
            segments.slice(1).every((segment) =>
                segment !== "." && segment !== ".." && !segment.startsWith(".")
            );
        if ((!isRootFile && !isAsset) ||
            segments.some((segment) => segment === "." || segment === ".." || !segment)) {
            response.writeHead(404);
            response.end("Not found");
            return;
        }

        const filePath = path.resolve(publicRoot, ...segments);
        const relativePath = path.relative(publicRoot, filePath);
        if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
            response.writeHead(404);
            response.end("Not found");
            return;
        }
        let realFilePath;
        let stats;
        try {
            realFilePath = await fs.promises.realpath(filePath);
            const realRelativePath = path.relative(publicRoot, realFilePath);
            if (realRelativePath.startsWith("..") || path.isAbsolute(realRelativePath)) {
                response.writeHead(404);
                response.end("Not found");
                return;
            }
            stats = await fs.promises.stat(realFilePath);
        } catch (error) {
            if (error.code === "ENOENT" || error.code === "ENOTDIR") {
                response.writeHead(404);
                response.end("Not found");
                return;
            }
            console.error("Unable to read a public file:", error.message);
            response.writeHead(500);
            response.end("Unable to read file");
            return;
        }
        if (!stats.isFile()) {
            response.writeHead(404);
            response.end("Not found");
            return;
        }

        const contentType = MIME_TYPES[path.extname(realFilePath).toLowerCase()];
        if (!contentType) {
            response.writeHead(404);
            response.end("Unsupported file type");
            return;
        }
        response.writeHead(200, {
            "content-type": contentType,
            "content-length": stats.size,
            "cache-control": "no-cache",
            "x-content-type-options": "nosniff",
            "referrer-policy": "strict-origin-when-cross-origin",
        });
        if (request.method === "HEAD") {
            response.end();
            return;
        }
        const stream = fs.createReadStream(realFilePath);
        stream.on("error", (error) => {
            console.error("Unable to stream a public file:", error.message);
            response.destroy(error);
        });
        stream.pipe(response);
    }

    function closeRoom(roomCode, closedSocket = null) {
        const room = rooms.get(roomCode);
        if (!room) {
            return;
        }
        rooms.delete(roomCode);
        clearTimeout(room.expiryTimer);
        for (const peer of room.clients) {
            peer.roomCode = "";
            if (peer !== closedSocket) {
                sendSocketMessage(peer, { type: "peer-left" });
                peer.close(4001, "Peer disconnected");
            }
        }
    }

    function sendProtocolError(socket, message, close = false) {
        sendSocketMessage(socket, { type: "error", message, close });
        if (close) {
            socket.close(1008, "Protocol error");
        }
    }

    function joinRoom(socket, roomCode) {
        if (socket.roomCode) {
            sendProtocolError(socket, "This connection already joined a room.", true);
            return;
        }
        if (typeof roomCode !== "string" || !ROOM_CODE_PATTERN.test(roomCode)) {
            sendProtocolError(socket, "Invalid room code.", true);
            return;
        }
        let room = rooms.get(roomCode);
        if (!room) {
            if (rooms.size >= MAX_ROOMS) {
                sendProtocolError(socket, "The signaling server is at capacity. Try again later.");
                return;
            }
            room = { clients: new Set(), expiryTimer: null };
            rooms.set(roomCode, room);
            room.expiryTimer = setTimeout(() => {
                const waitingRoom = rooms.get(roomCode);
                if (waitingRoom !== room || room.clients.size !== 1) {
                    return;
                }
                for (const client of room.clients) {
                    client.roomCode = "";
                    sendProtocolMessageAndClose(
                        client,
                        { type: "error", message: "The room expired after waiting 10 minutes.", close: true },
                        4002,
                        "Room expired"
                    );
                }
                rooms.delete(roomCode);
            }, MAX_ROOM_WAIT_MS);
            room.expiryTimer.unref?.();
        } else if (room.clients.size >= 2) {
            sendProtocolError(socket, "This room already has two connected devices.");
            return;
        }

        socket.roomCode = roomCode;
        room.clients.add(socket);
        clearTimeout(socket.joinTimeout);
        if (room.clients.size === 1) {
            sendSocketMessage(socket, { type: "waiting" });
            return;
        }
        clearTimeout(room.expiryTimer);
        const [initiator, answerer] = room.clients;
        sendSocketMessage(initiator, { type: "paired", role: "initiator" });
        sendSocketMessage(answerer, { type: "paired", role: "answerer" });
    }

    function sendProtocolMessageAndClose(socket, message, code, reason) {
        sendSocketMessage(socket, message);
        socket.close(code, reason);
    }

    function validateSignalPayload(payload) {
        if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
            return false;
        }
        if (payload.description) {
            const { type, sdp } = payload.description;
            return ["offer", "answer"].includes(type) &&
                typeof sdp === "string" && sdp.length <= 60 * 1024;
        }
        if (payload.candidate) {
            return typeof payload.candidate.candidate === "string" &&
                payload.candidate.candidate.length <= 4096;
        }
        return false;
    }

    function handleClientMessage(socket, data, isBinary) {
        const now = Date.now();
        if (now - socket.messageWindowStart >= MESSAGE_WINDOW_MS) {
            socket.messageWindowStart = now;
            socket.messageCount = 0;
        }
        socket.messageCount += 1;
        if (socket.messageCount > MAX_MESSAGES_PER_WINDOW) {
            sendProtocolError(socket, "Too many signaling messages.", true);
            return;
        }
        if (isBinary) {
            sendProtocolError(socket, "Binary data is not accepted by the signaling server.", true);
            return;
        }

        let message;
        try {
            message = JSON.parse(data.toString());
        } catch {
            sendProtocolError(socket, "Invalid JSON signaling message.", true);
            return;
        }
        if (message.type === "join") {
            joinRoom(socket, message.room);
            return;
        }
        if (message.type !== "signal" || !socket.roomCode) {
            sendProtocolError(socket, "Join a room before sending signaling data.");
            return;
        }
        if (!validateSignalPayload(message.payload)) {
            sendProtocolError(socket, "Invalid offer, answer, or ICE candidate.", true);
            return;
        }
        const room = rooms.get(socket.roomCode);
        const recipient = room && [...room.clients].find((client) => client !== socket);
        if (!recipient) {
            sendProtocolError(socket, "The other device is not connected.");
            return;
        }
        sendSocketMessage(recipient, {
            type: "signal",
            payload: message.payload,
        });
    }

    server.on("upgrade", (request, socket, head) => {
        let requestUrl;
        try {
            requestUrl = new URL(request.url, "http://localhost");
        } catch {
            socket.destroy();
            return;
        }
        if (requestUrl.pathname !== "/signal" ||
            !isAllowedOrigin(
                request.headers.origin,
                request.headers.host,
                allowedOrigins
            )) {
            socket.write("HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n");
            socket.destroy();
            return;
        }
        webSocketServer.handleUpgrade(request, socket, head, (webSocket) => {
            webSocketServer.emit("connection", webSocket, request);
        });
    });

    webSocketServer.on("connection", (socket) => {
        socket.roomCode = "";
        socket.messageCount = 0;
        socket.messageWindowStart = Date.now();
        socket.joinTimeout = setTimeout(() => {
            sendProtocolMessageAndClose(
                socket,
                { type: "error", message: "Join a room within 15 seconds.", close: true },
                4003,
                "Join timeout"
            );
        }, 15 * 1000);
        socket.joinTimeout.unref?.();
        socket.on("message", (data, isBinary) => {
            handleClientMessage(socket, data, isBinary);
        });
        socket.on("close", () => {
            clearTimeout(socket.joinTimeout);
            if (socket.roomCode) {
                closeRoom(socket.roomCode, socket);
            }
        });
        socket.on("error", (error) => {
            console.warn("WebSocket client error:", error.message);
        });
    });

    const heartbeatTimer = setInterval(() => {
        for (const socket of webSocketServer.clients) {
            if (socket.isAlive === false) {
                socket.terminate();
                continue;
            }
            socket.isAlive = false;
            socket.ping();
        }
    }, 30 * 1000);
    heartbeatTimer.unref?.();
    webSocketServer.on("connection", (socket) => {
        socket.isAlive = true;
        socket.on("pong", () => {
            socket.isAlive = true;
        });
    });

    function close() {
        clearInterval(heartbeatTimer);
        for (const roomCode of rooms.keys()) {
            closeRoom(roomCode);
        }
        for (const socket of webSocketServer.clients) {
            socket.terminate();
        }
        return new Promise((resolve, reject) => {
            webSocketServer.close((webSocketError) => {
                if (webSocketError) {
                    reject(webSocketError);
                    return;
                }
                if (!server.listening) {
                    resolve();
                    return;
                }
                server.close((httpError) => {
                    if (httpError) {
                        reject(httpError);
                    } else {
                        resolve();
                    }
                });
            });
        });
    }

    return { server, webSocketServer, rooms, close };
}

if (require.main === module) {
    const app = createTransferServer();
    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || "0.0.0.0";
    app.server.listen(port, host, () => {
        console.log(`KdsTools signaling server listening on ${host}:${port}`);
        console.log(
            iceConfigSummary(process.env)
        );
    });
    app.server.on("error", (error) => {
        console.error("Unable to start KdsTools signaling server:", error.message);
        process.exitCode = 1;
    });
    process.on("SIGTERM", () => {
        void app.close().catch((error) => {
            console.error("Unable to stop KdsTools signaling server:", error.message);
            process.exitCode = 1;
        });
    });
    process.on("SIGINT", () => {
        void app.close().catch((error) => {
            console.error("Unable to stop KdsTools signaling server:", error.message);
            process.exitCode = 1;
        });
    });
}

function iceConfigSummary(environment) {
    const hasTurn = Boolean(environment.TURN_URLS && environment.TURN_SHARED_SECRET);
    return hasTurn
        ? "ICE configuration: STUN plus short-lived TURN credentials enabled."
        : "ICE configuration: STUN only; configure TURN_URLS and TURN_SHARED_SECRET for restrictive networks.";
}

module.exports = { createTransferServer };
