import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import WebSocket from "ws";

const require = createRequire(import.meta.url);
const { createTransferServer } = require("../server.js");
const testRoom = "kds-share_room-26";

function listen(server) {
    return new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(0, "127.0.0.1", () => {
            server.removeListener("error", reject);
            resolve(server.address().port);
        });
    });
}

function waitForMessage(socket, predicate = () => true) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            socket.removeListener("message", onMessage);
            reject(new Error("Timed out waiting for a signaling message."));
        }, 3000);
        function onMessage(data) {
            let message;
            try {
                message = JSON.parse(data.toString());
            } catch (error) {
                clearTimeout(timeout);
                reject(error);
                return;
            }
            if (predicate(message)) {
                clearTimeout(timeout);
                socket.removeListener("message", onMessage);
                resolve(message);
            }
        }
        socket.on("message", onMessage);
    });
}

function openClient(url, origin) {
    return new Promise((resolve, reject) => {
        const socket = new WebSocket(url, { headers: { Origin: origin } });
        socket.once("open", () => resolve(socket));
        socket.once("error", reject);
    });
}

test("pairs two peers and relays only signaling messages", async (t) => {
    const app = createTransferServer();
    const port = await listen(app.server);
    t.after(() => app.close());
    const origin = `http://127.0.0.1:${port}`;
    const url = `ws://127.0.0.1:${port}/signal`;
    const first = await openClient(url, origin);
    const firstWaiting = waitForMessage(first);
    first.send(JSON.stringify({ type: "join", room: testRoom }));
    assert.deepEqual(await firstWaiting, { type: "waiting" });

    const second = await openClient(url, origin);
    const firstPaired = waitForMessage(first);
    const secondPaired = waitForMessage(second);
    second.send(JSON.stringify({ type: "join", room: testRoom }));
    assert.deepEqual(await firstPaired, { type: "paired", role: "initiator" });
    assert.deepEqual(await secondPaired, { type: "paired", role: "answerer" });

    const relayed = waitForMessage(second, (message) => message.type === "signal");
    first.send(JSON.stringify({
        type: "signal",
        payload: { description: { type: "offer", sdp: "test-sdp" } },
    }));
    assert.deepEqual(await relayed, {
        type: "signal",
        payload: { description: { type: "offer", sdp: "test-sdp" } },
    });

    const third = await openClient(url, origin);
    const roomFull = waitForMessage(third, (message) => message.type === "error");
    third.send(JSON.stringify({ type: "join", room: testRoom }));
    assert.match((await roomFull).message, /already has two/);
    first.close();
    second.close();
    third.close();

    const invalidRoomClient = await openClient(url, origin);
    const invalidRoom = waitForMessage(
        invalidRoomClient,
        (message) => message.type === "error"
    );
    invalidRoomClient.send(JSON.stringify({ type: "join", room: "bad room" }));
    assert.match((await invalidRoom).message, /Invalid room code/);
    invalidRoomClient.close();
});

test("serves a health check and short-lived TURN credentials when configured", async (t) => {
    const app = createTransferServer({
        env: {
            ...process.env,
            TURN_URLS: "turn:turn.example.test:3478",
            TURN_SHARED_SECRET: "test-shared-secret-with-more-than-32-characters",
        },
    });
    const port = await listen(app.server);
    t.after(() => app.close());
    const origin = `http://127.0.0.1:${port}`;
    const health = await fetch(`${origin}/health`);
    assert.deepEqual(await health.json(), { status: "ok" });

    const iceResponse = await fetch(`${origin}/ice-servers`);
    const { iceServers } = await iceResponse.json();
    assert.equal(iceServers[0].urls, "stun:stun.l.google.com:19302");
    assert.equal(iceServers[1].urls[0], "turn:turn.example.test:3478");
    assert.match(iceServers[1].username, /^\d+:[0-9a-f-]{36}$/);
    assert.ok(iceServers[1].credential.length > 20);
});

test("serves only public app files and rejects an untrusted WebSocket origin", async (t) => {
    const app = createTransferServer();
    const port = await listen(app.server);
    t.after(() => app.close());
    const origin = `http://127.0.0.1:${port}`;
    assert.equal((await fetch(`${origin}/`)).status, 200);
    assert.equal((await fetch(`${origin}/server.js`)).status, 404);
    assert.equal((await fetch(`${origin}/%2e%2e%2fserver.js`)).status, 404);
    await new Promise((resolve, reject) => {
        const socket = new WebSocket(`ws://127.0.0.1:${port}/signal`, {
            headers: { Origin: "https://attacker.example" },
        });
        socket.once("unexpected-response", (_request, response) => {
            assert.equal(response.statusCode, 403);
            response.resume();
            resolve();
        });
        socket.once("open", () => {
            socket.close();
            reject(new Error("An untrusted WebSocket origin was accepted."));
        });
        socket.once("error", (error) => {
            if (!error.message.includes("Unexpected server response")) {
                reject(error);
            }
        });
    });
});
