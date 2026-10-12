
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const categoryButtons = document.querySelectorAll(".category-button");
const toolGroups = document.querySelectorAll(".tool-group");
const toolCards = document.querySelectorAll(".tool-card");
const emptyState = document.getElementById("emptyState");

const toolDialog = document.getElementById("toolDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogDescription = document.getElementById("dialogDescription");
const closeDialog = document.getElementById("closeDialog");
const dialogOk = document.getElementById("dialogOk");
const dialogNote = document.getElementById("dialogNote");
const toolPanels = new Map(
    [...document.querySelectorAll(".tool-panel")]
        .map((panel) => [panel.dataset.tool, panel])
);
const baseInput = document.getElementById("baseInput");
const sourceBase = document.getElementById("sourceBase");
const baseStatus = document.getElementById("baseStatus");
const timerDisplay = document.getElementById("timerDisplay");
const timerRing = document.getElementById("timerRing");
const timerStart = document.getElementById("timerStart");
const timerPause = document.getElementById("timerPause");
const timerReset = document.getElementById("timerReset");
const timerStatus = document.getElementById("timerStatus");
const timerMode = document.getElementById("timerMode");
const timerPhaseLabel = document.getElementById("timerPhaseLabel");
const timerPresetButtons = document.querySelectorAll(".timer-preset-button");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoStatus = document.getElementById("todoStatus");
const todoCount = document.getElementById("todoCount");
const todoEmpty = document.getElementById("todoEmpty");
const clearCompletedTodos = document.getElementById("clearCompletedTodos");
const notesInput = document.getElementById("notesInput");
const notesStatus = document.getElementById("notesStatus");
const copyNotes = document.getElementById("copyNotes");
const examForm = document.getElementById("examForm");
const examName = document.getElementById("examName");
const examDate = document.getElementById("examDate");
const examEventCard = document.getElementById("examEventCard");
const examStatus = document.getElementById("examStatus");
const studyWeekChart = document.getElementById("studyWeekChart");
const studyWeekLabel = document.getElementById("studyWeekLabel");
const studyWeekTotal = document.getElementById("studyWeekTotal");
const studyHourInputs = document.getElementById("studyHourInputs");
const studyStatus = document.getElementById("studyStatus");
const timetableGrid = document.getElementById("timetableGrid");
const classForm = document.getElementById("classForm");
const classSubject = document.getElementById("classSubject");
const classRoom = document.getElementById("classRoom");
const timetableStatus = document.getElementById("timetableStatus");
const billAmount = document.getElementById("billAmount");
const billPeople = document.getElementById("billPeople");
const billTip = document.getElementById("billTip");
const billPerPerson = document.getElementById("billPerPerson");
const billBreakdown = document.getElementById("billBreakdown");
const billStatus = document.getElementById("billStatus");
const mergePdfFiles = document.getElementById("mergePdfFiles");
const splitPdfFile = document.getElementById("splitPdfFile");
const splitPdfPages = document.getElementById("splitPdfPages");
const imageFiles = document.getElementById("imageFiles");
const imagePageSize = document.getElementById("imagePageSize");
const compressPdfFile = document.getElementById("compressPdfFile");
const backgroundSourceFile = document.getElementById("backgroundSourceFile");
const backgroundImageFile = document.getElementById("backgroundImageFile");
const backgroundOriginalPreview = document.getElementById("backgroundOriginalPreview");
const backgroundOriginalPlaceholder = document.getElementById("backgroundOriginalPlaceholder");
const backgroundResultPreview = document.getElementById("backgroundResultPreview");
const backgroundReplacementPreview = document.getElementById("backgroundReplacementPreview");
const backgroundResultPlaceholder = document.getElementById("backgroundResultPlaceholder");
const backgroundResultStage = document.getElementById("backgroundResultStage");
const backgroundMode = document.getElementById("backgroundMode");
const backgroundColor = document.getElementById("backgroundColor");
const backgroundZoom = document.getElementById("backgroundZoom");
const backgroundZoomValue = document.getElementById("backgroundZoomValue");
const backgroundColorControl = document.getElementById("backgroundColorControl");
const backgroundImageControl = document.getElementById("backgroundImageControl");
const backgroundRemoveButton = document.getElementById("backgroundRemoveButton");
const backgroundDownloadButton = document.getElementById("backgroundDownloadButton");
const backgroundClearButton = document.getElementById("backgroundClearButton");
const backgroundProgressWrap = document.getElementById("backgroundProgressWrap");
const backgroundProgress = document.getElementById("backgroundProgress");
const backgroundRemoverStatus = document.getElementById("backgroundRemoverStatus");
const backgroundImageInfo = document.getElementById("backgroundImageInfo");
const qrContentType = document.getElementById("qrContentType");
const qrContent = document.getElementById("qrContent");
const qrContentLabel = document.getElementById("qrContentLabel");
const qrInputHint = document.getElementById("qrInputHint");
const qrPlainFields = document.getElementById("qrPlainFields");
const qrVcardFields = document.getElementById("qrVcardFields");
const qrContactName = document.getElementById("qrContactName");
const qrContactPhone = document.getElementById("qrContactPhone");
const qrContactEmail = document.getElementById("qrContactEmail");
const qrContactOrganization = document.getElementById("qrContactOrganization");
const qrForeground = document.getElementById("qrForeground");
const qrBackground = document.getElementById("qrBackground");
const qrSize = document.getElementById("qrSize");
const qrMargin = document.getElementById("qrMargin");
const qrPreviewCanvas = document.getElementById("qrPreviewCanvas");
const qrPreviewPlaceholder = document.getElementById("qrPreviewPlaceholder");
const qrWarning = document.getElementById("qrWarning");
const qrStatus = document.getElementById("qrStatus");
const qrCopyButton = document.getElementById("qrCopyButton");
const qrPngButton = document.getElementById("qrPngButton");
const qrSvgButton = document.getElementById("qrSvgButton");
const assetSheetFile = document.getElementById("assetSheetFile");
const assetSheetDropzone = document.getElementById("assetSheetDropzone");
const assetSheetInfo = document.getElementById("assetSheetInfo");
const assetSliceMode = document.getElementById("assetSliceMode");
const assetRows = document.getElementById("assetRows");
const assetCols = document.getElementById("assetCols");
const assetFrameWidth = document.getElementById("assetFrameWidth");
const assetFrameHeight = document.getElementById("assetFrameHeight");
const assetGridParameters = document.querySelector(".asset-grid-parameters");
const assetFrameParameters = document.querySelector(".asset-frame-parameters");
const assetSheetFolder = document.getElementById("assetSheetFolder");
const assetSliceButton = document.getElementById("assetSliceButton");
const assetSliceStatus = document.getElementById("assetSliceStatus");
const assetFrameCount = document.getElementById("assetFrameCount");
const assetSelectAllButton = document.getElementById("assetSelectAllButton");
const assetFrameGrid = document.getElementById("assetFrameGrid");
const assetAnimationCanvas = document.getElementById("assetAnimationCanvas");
const assetAnimationPlaceholder = document.getElementById("assetAnimationPlaceholder");
const assetFps = document.getElementById("assetFps");
const assetFpsValue = document.getElementById("assetFpsValue");
const assetPlayButton = document.getElementById("assetPlayButton");
const assetPauseButton = document.getElementById("assetPauseButton");
const assetStopButton = document.getElementById("assetStopButton");
const assetLoop = document.getElementById("assetLoop");
const assetAnimationStatus = document.getElementById("assetAnimationStatus");
const assetResizeMode = document.getElementById("assetResizeMode");
const assetResizePercentControl = document.getElementById("assetResizePercentControl");
const assetResizePixelControls = document.getElementById("assetResizePixelControls");
const assetResizePercent = document.getElementById("assetResizePercent");
const assetResizeWidth = document.getElementById("assetResizeWidth");
const assetResizeHeight = document.getElementById("assetResizeHeight");
const assetResizeButton = document.getElementById("assetResizeButton");
const assetBackgroundMode = document.getElementById("assetBackgroundMode");
const assetBackgroundColorControl = document.getElementById("assetBackgroundColorControl");
const assetBackgroundColor = document.getElementById("assetBackgroundColor");
const assetTolerance = document.getElementById("assetTolerance");
const assetToleranceValue = document.getElementById("assetToleranceValue");
const assetBackgroundButton = document.getElementById("assetBackgroundButton");
const assetProcessingStatus = document.getElementById("assetProcessingStatus");
const assetAnimationPrompt = document.getElementById("assetAnimationPrompt");
const assetPromptFrameCount = document.getElementById("assetPromptFrameCount");
const assetSuggestButton = document.getElementById("assetSuggestButton");
const assetSuggestions = document.getElementById("assetSuggestions");
const assetLibraryFiles = document.getElementById("assetLibraryFiles");
const assetLibraryDropzone = document.getElementById("assetLibraryDropzone");
const assetFolderForm = document.getElementById("assetFolderForm");
const assetFolderName = document.getElementById("assetFolderName");
const assetFolderTree = document.getElementById("assetFolderTree");
const assetLibraryList = document.getElementById("assetLibraryList");
const assetExportFolder = document.getElementById("assetExportFolder");
const assetExportZipButton = document.getElementById("assetExportZipButton");
const assetExportSelectedButton = document.getElementById("assetExportSelectedButton");
const assetManagerStatus = document.getElementById("assetManagerStatus");
const formatterLanguage = document.getElementById("formatterLanguage");
const formatterIndent = document.getElementById("formatterIndent");
const formatterFile = document.getElementById("formatterFile");
const formatterCode = document.getElementById("formatterCode");
const formatterLineNumbers = document.getElementById("formatterLineNumbers");
const formatterStatus = document.getElementById("formatterStatus");
const formatCodeButton = document.getElementById("formatCodeButton");
const copyCodeButton = document.getElementById("copyCodeButton");
const clearCodeButton = document.getElementById("clearCodeButton");
const downloadCodeButton = document.getElementById("downloadCodeButton");
const bigOCode = document.getElementById("bigOCode");
const bigOLineNumbers = document.getElementById("bigOLineNumbers");
const bigOStatus = document.getElementById("bigOStatus");
const bigOResults = document.getElementById("bigOResults");
const bigOTime = document.getElementById("bigOTime");
const bigOSpace = document.getElementById("bigOSpace");
const bigOConfidence = document.getElementById("bigOConfidence");
const bigOSteps = document.getElementById("bigOSteps");
const bigOWarningBox = document.getElementById("bigOWarningBox");
const bigOWarnings = document.getElementById("bigOWarnings");
const bigOExample = document.getElementById("bigOExample");
const analyzeBigOButton = document.getElementById("analyzeBigOButton");
const clearBigOButton = document.getElementById("clearBigOButton");
const algorithmChoice = document.getElementById("algorithmChoice");
const algorithmSpeed = document.getElementById("algorithmSpeed");
const algorithmSpeedValue = document.getElementById("algorithmSpeedValue");
const sortInputControls = document.getElementById("sortInputControls");
const graphInputControls = document.getElementById("graphInputControls");
const sortArrayInput = document.getElementById("sortArrayInput");
const randomArrayButton = document.getElementById("randomArrayButton");
const addVertexForm = document.getElementById("addVertexForm");
const newVertexName = document.getElementById("newVertexName");
const removeVertexSelect = document.getElementById("removeVertexSelect");
const removeVertexButton = document.getElementById("removeVertexButton");
const addEdgeForm = document.getElementById("addEdgeForm");
const edgeFrom = document.getElementById("edgeFrom");
const edgeTo = document.getElementById("edgeTo");
const edgeWeight = document.getElementById("edgeWeight");
const edgeUndirected = document.getElementById("edgeUndirected");
const bfsStartVertex = document.getElementById("bfsStartVertex");
const graphEdgeList = document.getElementById("graphEdgeList");
const algorithmStart = document.getElementById("algorithmStart");
const algorithmPause = document.getElementById("algorithmPause");
const algorithmPrevious = document.getElementById("algorithmPrevious");
const algorithmNext = document.getElementById("algorithmNext");
const algorithmReset = document.getElementById("algorithmReset");
const algorithmStatus = document.getElementById("algorithmStatus");
const algorithmOutcome = document.getElementById("algorithmOutcome");
const algorithmStepCount = document.getElementById("algorithmStepCount");
const algorithmComplexity = document.getElementById("algorithmComplexity");
const sortVisualization = document.getElementById("sortVisualization");
const sortArrayView = document.getElementById("sortArrayView");
const graphVisualization = document.getElementById("graphVisualization");
const graphSvg = document.getElementById("graphSvg");
const algorithmComplexityDetails = document.getElementById("algorithmComplexityDetails");
const arrayInputLabel = document.getElementById("arrayInputLabel");
const searchTargetControl = document.getElementById("searchTargetControl");
const searchTarget = document.getElementById("searchTarget");
const graphAlgorithmHeading = document.getElementById("graphAlgorithmHeading");
const graphAlgorithmHint = document.getElementById("graphAlgorithmHint");
const graphProgress = document.getElementById("graphProgress");
const pdfLibraryUrl =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js";
let pdfLibraryPromise = null;
const clangFormatterUrl =
    "https://unpkg.com/@wasm-fmt/clang-format@23.1.1/clang-format-web.js";
const pythonFormatterUrl =
    "https://unpkg.com/@wasm-fmt/ruff_fmt@0.15.20/ruff_fmt_web.js";
const backgroundRemovalModuleUrl =
    "https://esm.sh/@imgly/background-removal@1.7.0?bundle";
const maxBackgroundImageBytes = 20 * 1024 * 1024;
const maxBackgroundImagePixels = 16_000_000;
let clangFormatterPromise = null;
let pythonFormatterPromise = null;
let backgroundRemovalModulePromise = null;
let backgroundSource = null;
let backgroundSourceUrl = null;
let backgroundResultBlob = null;
let backgroundResultUrl = null;
let backgroundImageBitmap = null;
let backgroundImageUrl = null;
let backgroundRemovalBusy = false;
let hasFormattedCode = false;
let assetSheetCanvas = null;
let assetSheetName = "sprite-sheet";
let assetFrames = [];
let assetFolders = new Set([""]);
let assetFolderFilter = "";
let assetFolderControlsInitialized = false;
let assetNextId = 1;
let assetAnimationFrameId = 0;
let assetAnimationLastTime = 0;
let assetAnimationAccumulator = 0;
let assetAnimationIndex = 0;
let assetAnimationPlaying = false;
let assetLastDrawnIndex = -1;
const qrLibraryUrl =
    "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";
let qrLibraryPromise = null;
let qrRenderRequest = 0;
let qrSvgMarkup = "";

const storageKeys = {
    todos: "kds-tools-todos",
    notes: "kds-tools-notes",
    pomodoro: "kds-tools-pomodoro",
    exam: "kds-tools-exam",
    study: "kds-tools-study",
    timetable: "kds-tools-timetable",
};
let todosState = [];
let selectedClassSlot = null;
let notesSaveTimeout = null;
let algorithmModulePromise = null;
let algorithmFrames = [];
let algorithmFrameIndex = -1;
let algorithmPlaybackTimeout = null;
let algorithmIsPlaying = false;
let algorithmIsPreparing = false;
let algorithmPreparationPromise = null;
let visualizerGraph = {
    vertices: ["A", "B", "C", "D", "E", "F"],
    edges: [
        { from: "A", to: "B", weight: 1, undirected: true },
        { from: "A", to: "C", weight: 1, undirected: true },
        { from: "B", to: "D", weight: 1, undirected: true },
        { from: "B", to: "E", weight: 1, undirected: true },
        { from: "C", to: "F", weight: 1, undirected: true },
    ],
};

let currentCategory = "all";

function normalizeText(text) {
    return text
        .toLocaleLowerCase("vi")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .trim();
}

function filterTools() {
    const keyword = normalizeText(searchInput.value);
    let visibleCount = 0;

    toolCards.forEach((card) => {
        const name = card.dataset.name || "";
        const category = card.dataset.category || "";
        const keywords = card.dataset.keywords || "";
        const description =
            card.querySelector(".tool-description")?.textContent || "";

        const searchableText = normalizeText(
            `${name} ${keywords} ${description}`
        );

        const matchesKeyword = searchableText.includes(keyword);
        const matchesCategory =
            currentCategory === "all" || category === currentCategory;

        const isVisible = matchesKeyword && matchesCategory;

        card.hidden = !isVisible;

        if (isVisible) {
            visibleCount++;
        }
    });

    toolGroups.forEach((group) => {
        const hasVisibleCards = [...group.querySelectorAll(".tool-card")]
            .some((card) => !card.hidden);

        group.hidden = !hasVisibleCards;
    });

    emptyState.hidden = visibleCount !== 0;

    resultCount.textContent = keyword || currentCategory !== "all"
        ? `Tìm thấy ${visibleCount} công cụ`
        : `Hiện có ${visibleCount} công cụ`;
}

searchInput.addEventListener("input", filterTools);

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentCategory = button.dataset.category;

        categoryButtons.forEach((item) => {
            const isActive = item === button;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        filterTools();
    });
});

document.addEventListener("keydown", (event) => {
    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {
        event.preventDefault();
        searchInput.focus();
    }
});

function openTool(activeTool, name, description) {
    if (activeTool !== "game-asset-helper") {
        stopAssetAnimation();
    }
    dialogTitle.textContent = name;
    dialogDescription.textContent = description;
    toolDialog.classList.toggle(
        "wide-dialog",
        activeTool === "timetable" ||
        activeTool === "code-formatter" ||
        activeTool === "big-o-calculator" ||
        activeTool === "algorithm-visualizer" ||
        activeTool === "background-remover" ||
        activeTool === "qr-code-generator" ||
        activeTool === "game-asset-helper"
    );
    toolPanels.forEach((panel, tool) => {
        panel.hidden = tool !== activeTool;
    });
    const hasWorkingTool = toolPanels.has(activeTool);
    dialogNote.hidden = hasWorkingTool;
    dialogOk.hidden = hasWorkingTool;
    baseStatus.textContent = "";
    [document.getElementById("mergePdfStatus"),
        document.getElementById("splitPdfStatus"),
        document.getElementById("imageToPdfStatus"),
        backgroundRemoverStatus,
        document.getElementById("compressPdfStatus")]
        .forEach((status) => setStorageStatus(status, ""));
    toolDialog.showModal();

    const focusTargets = {
        "base-converter": baseInput,
        "code-formatter": formatterCode,
        "big-o-calculator": bigOCode,
        "algorithm-visualizer": algorithmChoice,
        "todo-list": todoInput,
        "quick-notes": notesInput,
        "pdf-merge": mergePdfFiles,
        "pdf-split": splitPdfFile,
        "image-to-pdf": imageFiles,
        "background-remover": backgroundSourceFile,
        "qr-code-generator": qrContentType,
        "game-asset-helper": assetSheetFile,
        "pdf-compress": compressPdfFile,
        "exam-countdown": examName,
        "study-tracker": document.getElementById("previousStudyWeek"),
        "timetable": timetableGrid,
        "bill-splitter": billAmount,
    };
    focusTargets[activeTool]?.focus();
}

toolCards.forEach((card) => {
    card.addEventListener("click", () => {
        openTool(
            card.dataset.tool,
            card.dataset.name,
            card.querySelector(".tool-description").textContent
        );
    });
});

document.querySelectorAll("[data-open-tool]").forEach((button) => {
    button.addEventListener("click", () => {
        const activeTool = button.dataset.openTool;
        const card = document.querySelector(`.tool-card[data-tool="${activeTool}"]`);
        openTool(
            activeTool,
            card.dataset.name,
            card.querySelector(".tool-description").textContent
        );
    });
});

function loadPdfLibrary() {
    if (window.PDFLib?.PDFDocument) {
        return Promise.resolve(window.PDFLib);
    }
    if (pdfLibraryPromise) {
        return pdfLibraryPromise;
    }

    const script = document.createElement("script");
    script.src = pdfLibraryUrl;
    script.integrity =
        "sha384-weMABwrltA6jWR8DDe9Jp5blk+tZQh7ugpCsF3JwSA53WZM9/14PjS5LAJNHNjAI";
    script.crossOrigin = "anonymous";

    const loading = new Promise((resolve, reject) => {
        script.addEventListener("load", () => {
            if (window.PDFLib?.PDFDocument) {
                resolve(window.PDFLib);
                return;
            }
            if (
                getAssetPixelCount() + frameTotal * frameWidth * frameHeight >
                maxAssetPixels
            ) {
                setAssetStatus(
                    assetSliceStatus,
                    "Các frame và sprite sheet vượt giới hạn 32 megapixel tổng để bảo vệ bộ nhớ.",
                    true
                );
                return;
            }
            reject(new Error("Thư viện PDF không khởi tạo đúng cách."));
        }, { once: true });
        script.addEventListener("error", () => {
            reject(new Error("Không tải được thư viện PDF. Hãy kiểm tra kết nối mạng rồi thử lại."));
        }, { once: true });
        document.head.append(script);
    });

    pdfLibraryPromise = loading.catch((error) => {
        script.remove();
        pdfLibraryPromise = null;
        throw error;
    });
    return pdfLibraryPromise;
}

async function runPdfOperation(status, button, operation) {
    button.disabled = true;
    setStorageStatus(status, "Đang tải công cụ PDF và xử lý tệp...");
    try {
        const pdfLib = await loadPdfLibrary();
        await operation(pdfLib);
    } catch (error) {
        setStorageStatus(status, `Không thể xử lý PDF: ${error.message}`, true);
    } finally {
        button.disabled = false;
    }
}

function requirePdfFile(file) {
    if (!file || (file.type !== "application/pdf" && !/\.pdf$/i.test(file.name))) {
        throw new Error("Hãy chọn một tệp PDF hợp lệ.");
    }
    return file;
}

async function readPdfDocument(file, pdfLib) {
    const validFile = requirePdfFile(file);
    return pdfLib.PDFDocument.load(await validFile.arrayBuffer());
}

function downloadPdf(bytes, filename) {
    const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.getElementById("mergePdfButton").addEventListener("click", () => {
    const status = document.getElementById("mergePdfStatus");
    const button = document.getElementById("mergePdfButton");
    runPdfOperation(status, button, async (pdfLib) => {
        const files = [...mergePdfFiles.files];
        if (files.length < 2) {
            throw new Error("Chọn ít nhất hai tệp PDF theo thứ tự cần gộp.");
        }

        const mergedPdf = await pdfLib.PDFDocument.create();
        for (const file of files) {
            const source = await readPdfDocument(file, pdfLib);
            const pages = await mergedPdf.copyPages(source, source.getPageIndices());
            pages.forEach((page) => mergedPdf.addPage(page));
        }

        const bytes = await mergedPdf.save({ useObjectStreams: true });
        const filename = files[0].name.replace(/\.pdf$/i, "") || "document";
        downloadPdf(bytes, `${filename}-merged.pdf`);
        setStorageStatus(status, `Đã gộp ${files.length} tệp PDF.`);
    });
});

function parsePageRanges(value, pageCount) {
    const pages = [];
    const seen = new Set();
    const ranges = value.split(",").map((part) => part.trim());
    if (!value.trim() || ranges.some((part) => !part)) {
        throw new Error("Nhập trang theo dạng 1, 3-5.");
    }

    ranges.forEach((range) => {
        const match = range.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
        if (!match) {
            throw new Error(`Khoảng trang không hợp lệ: ${range}`);
        }
        const first = Number(match[1]);
        const last = Number(match[2] || match[1]);
        if (first < 1 || last < first || last > pageCount) {
            throw new Error(`Trang ${range} nằm ngoài tài liệu có ${pageCount} trang.`);
        }
        for (let page = first; page <= last; page++) {
            if (!seen.has(page)) {
                pages.push(page - 1);
                seen.add(page);
            }
        }
    });
    return pages;
}

document.getElementById("splitPdfButton").addEventListener("click", () => {
    const status = document.getElementById("splitPdfStatus");
    const button = document.getElementById("splitPdfButton");
    runPdfOperation(status, button, async (pdfLib) => {
        const sourceFile = requirePdfFile(splitPdfFile.files[0]);
        const source = await readPdfDocument(sourceFile, pdfLib);
        const pageIndices = parsePageRanges(splitPdfPages.value, source.getPageCount());
        const splitPdf = await pdfLib.PDFDocument.create();
        const pages = await splitPdf.copyPages(source, pageIndices);
        pages.forEach((page) => splitPdf.addPage(page));
        const bytes = await splitPdf.save({ useObjectStreams: true });
        const filename = sourceFile.name.replace(/\.pdf$/i, "") || "document";
        downloadPdf(bytes, `${filename}-pages.pdf`);
        setStorageStatus(status, `Đã tách ${pages.length} trang thành một tệp PDF.`);
    });
});

document.getElementById("imageToPdfButton").addEventListener("click", () => {
    const status = document.getElementById("imageToPdfStatus");
    const button = document.getElementById("imageToPdfButton");
    runPdfOperation(status, button, async (pdfLib) => {
        const files = [...imageFiles.files];
        if (!files.length) {
            throw new Error("Chọn ít nhất một ảnh PNG hoặc JPEG.");
        }
        const output = await pdfLib.PDFDocument.create();
        const a4Portrait = [595.28, 841.89];
        const a4Landscape = [841.89, 595.28];

        for (const file of files) {
            const extension = file.name.match(/\.([^.]+)$/)?.[1]?.toLowerCase();
            const isJpeg = file.type === "image/jpeg" ||
                extension === "jpg" || extension === "jpeg";
            const isPng = file.type === "image/png" || extension === "png";
            if (!isJpeg && !isPng) {
                throw new Error(`Định dạng ảnh không được hỗ trợ: ${file.name}`);
            }
            const image = isJpeg
                ? await output.embedJpg(await file.arrayBuffer())
                : await output.embedPng(await file.arrayBuffer());
            let pageWidth = image.width;
            let pageHeight = image.height;

            if (imagePageSize.value === "a4") {
                [pageWidth, pageHeight] = image.width > image.height
                    ? a4Landscape
                    : a4Portrait;
                const margin = 24;
                const scale = Math.min(
                    (pageWidth - margin * 2) / image.width,
                    (pageHeight - margin * 2) / image.height
                );
                const width = image.width * scale;
                const height = image.height * scale;
                const page = output.addPage([pageWidth, pageHeight]);
                page.drawImage(image, {
                    x: (pageWidth - width) / 2,
                    y: (pageHeight - height) / 2,
                    width,
                    height,
                });
            } else {
                const page = output.addPage([pageWidth, pageHeight]);
                page.drawImage(image, { x: 0, y: 0, width: pageWidth, height: pageHeight });
            }
        }

        const bytes = await output.save({ useObjectStreams: true });
        downloadPdf(bytes, "images.pdf");
        setStorageStatus(status, `Đã tạo PDF gồm ${files.length} trang ảnh.`);
    });
});

function setBackgroundStatus(message, isError = false) {
    backgroundRemoverStatus.textContent = message;
    backgroundRemoverStatus.classList.toggle("status-error", isError);
}

function revokeBackgroundUrl(url) {
    if (url) URL.revokeObjectURL(url);
}

function updateBackgroundControls() {
    const hasResult = Boolean(backgroundResultBlob);
    backgroundColorControl.hidden = backgroundMode.value !== "color";
    backgroundImageControl.hidden = backgroundMode.value !== "image";
    backgroundRemoveButton.disabled = !backgroundSource || backgroundRemovalBusy;
    backgroundDownloadButton.disabled = !hasResult || backgroundRemovalBusy ||
        (backgroundMode.value === "image" && !backgroundImageBitmap);
    backgroundClearButton.disabled = backgroundRemovalBusy;
    backgroundSourceFile.disabled = backgroundRemovalBusy;
    backgroundImageFile.disabled = backgroundRemovalBusy;
}

function updateBackgroundZoom() {
    const scale = Number(backgroundZoom.value) / 100;
    backgroundZoomValue.value = `${backgroundZoom.value}%`;
    backgroundZoomValue.textContent = `${backgroundZoom.value}%`;
    [backgroundOriginalPreview, backgroundResultPreview, backgroundReplacementPreview]
        .forEach((image) => {
            image.style.transform = `scale(${scale})`;
        });
}

function renderBackgroundPreview() {
    const hasResult = Boolean(backgroundResultUrl);
    backgroundResultPreview.hidden = !hasResult;
    backgroundResultPlaceholder.hidden = hasResult;
    backgroundReplacementPreview.hidden =
        !hasResult || backgroundMode.value !== "image" || !backgroundImageUrl;
    backgroundResultStage.classList.toggle(
        "background-checkerboard",
        backgroundMode.value === "transparent" || !hasResult
    );
    backgroundResultStage.style.backgroundColor =
        backgroundMode.value === "color" && hasResult
            ? backgroundColor.value
            : "transparent";
    if (backgroundResultUrl && backgroundResultPreview.src !== backgroundResultUrl) {
        backgroundResultPreview.src = backgroundResultUrl;
    }
    if (backgroundImageUrl && backgroundReplacementPreview.src !== backgroundImageUrl) {
        backgroundReplacementPreview.src = backgroundImageUrl;
    }
    updateBackgroundControls();
}

function clearBackgroundResult() {
    revokeBackgroundUrl(backgroundResultUrl);
    backgroundResultUrl = null;
    backgroundResultBlob = null;
    backgroundResultPreview.removeAttribute("src");
    backgroundReplacementPreview.removeAttribute("src");
    renderBackgroundPreview();
}

function clearBackgroundRemover() {
    if (backgroundRemovalBusy) return;
    revokeBackgroundUrl(backgroundSourceUrl);
    revokeBackgroundUrl(backgroundImageUrl);
    revokeBackgroundUrl(backgroundResultUrl);
    backgroundSourceUrl = null;
    backgroundImageUrl = null;
    backgroundResultUrl = null;
    backgroundSource = null;
    backgroundResultBlob = null;
    backgroundImageBitmap?.close();
    backgroundImageBitmap = null;
    backgroundSourceFile.value = "";
    backgroundImageFile.value = "";
    backgroundOriginalPreview.removeAttribute("src");
    backgroundResultPreview.removeAttribute("src");
    backgroundReplacementPreview.removeAttribute("src");
    backgroundOriginalPreview.hidden = true;
    backgroundOriginalPlaceholder.hidden = false;
    backgroundImageInfo.hidden = true;
    backgroundImageInfo.textContent = "";
    backgroundProgressWrap.hidden = true;
    backgroundProgress.value = 0;
    setBackgroundStatus("");
    renderBackgroundPreview();
    updateBackgroundControls();
}

function getBackgroundPixelLimit() {
    const lowMemoryDevice = (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
    return lowMemoryDevice ? 8_000_000 : maxBackgroundImagePixels;
}

backgroundSourceFile.addEventListener("change", async () => {
    const file = backgroundSourceFile.files[0];
    if (!file) return;
    revokeBackgroundUrl(backgroundSourceUrl);
    backgroundSourceUrl = null;
    backgroundSource = null;
    backgroundOriginalPreview.removeAttribute("src");
    backgroundOriginalPreview.hidden = true;
    backgroundOriginalPlaceholder.hidden = false;
    backgroundImageInfo.hidden = true;
    backgroundImageInfo.textContent = "";
    clearBackgroundResult();
    updateBackgroundControls();
    const acceptedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!acceptedTypes.includes(file.type)) {
        setBackgroundStatus("Định dạng ảnh không được hỗ trợ. Hãy chọn JPG, PNG hoặc WebP.", true);
        backgroundSourceFile.value = "";
        return;
    }
    if (file.size > maxBackgroundImageBytes) {
        setBackgroundStatus("Ảnh vượt quá giới hạn 20 MB. Hãy chọn hoặc xuất ảnh nhỏ hơn.", true);
        backgroundSourceFile.value = "";
        return;
    }

    let bitmap;
    try {
        bitmap = await createImageBitmap(file);
        const pixelCount = bitmap.width * bitmap.height;
        const pixelLimit = getBackgroundPixelLimit();
        if (pixelCount > pixelLimit) {
            throw new RangeError(
                `Ảnh có ${pixelCount.toLocaleString("vi-VN")} pixel; giới hạn thiết bị hiện tại là ${pixelLimit.toLocaleString("vi-VN")} pixel. Hãy giảm kích thước ảnh rồi thử lại.`
            );
        }
        revokeBackgroundUrl(backgroundSourceUrl);
        backgroundSource = file;
        backgroundSourceUrl = URL.createObjectURL(file);
        backgroundOriginalPreview.src = backgroundSourceUrl;
        backgroundOriginalPreview.hidden = false;
        backgroundOriginalPlaceholder.hidden = true;
        backgroundImageInfo.hidden = false;
        backgroundImageInfo.textContent =
            `${file.name} · ${bitmap.width} × ${bitmap.height} px · ${formatFileSize(file.size)}`;
        clearBackgroundResult();
        const lowMemoryDevice = pixelLimit < maxBackgroundImagePixels;
        setBackgroundStatus(lowMemoryDevice
            ? "Ảnh đã sẵn sàng. Thiết bị có vẻ hạn chế tài nguyên; đang áp dụng giới hạn ảnh thấp hơn để giảm nguy cơ thiếu bộ nhớ."
            : "Ảnh đã sẵn sàng để tách nền.");
    } catch (error) {
        setBackgroundStatus(
            error instanceof Error ? error.message : String(error),
            true
        );
        backgroundSourceFile.value = "";
    } finally {
        bitmap?.close();
        updateBackgroundControls();
    }
});

backgroundImageFile.addEventListener("change", async () => {
    const file = backgroundImageFile.files[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
        setBackgroundStatus("Ảnh nền cần ở định dạng JPG, PNG hoặc WebP.", true);
        backgroundImageFile.value = "";
        return;
    }
    if (file.size > maxBackgroundImageBytes) {
        setBackgroundStatus("Ảnh nền vượt quá giới hạn 20 MB.", true);
        backgroundImageFile.value = "";
        return;
    }
    let bitmap;
    try {
        bitmap = await createImageBitmap(file);
        if (bitmap.width * bitmap.height > maxBackgroundImagePixels) {
            throw new RangeError("Ảnh nền vượt quá 16 megapixel; hãy chọn ảnh nhỏ hơn.");
        }
        backgroundImageBitmap?.close();
        revokeBackgroundUrl(backgroundImageUrl);
        backgroundImageBitmap = bitmap;
        bitmap = null;
        backgroundImageUrl = URL.createObjectURL(file);
        renderBackgroundPreview();
        setBackgroundStatus("Đã tải ảnh nền tùy chọn.");
    } catch (error) {
        setBackgroundStatus(error instanceof Error ? error.message : String(error), true);
        backgroundImageFile.value = "";
    } finally {
        bitmap?.close();
        updateBackgroundControls();
    }
});

function loadBackgroundRemovalModule() {
    if (!backgroundRemovalModulePromise) {
        backgroundRemovalModulePromise = import(backgroundRemovalModuleUrl).then((module) => {
            const removeBackground = module.default || module.removeBackground;
            if (typeof removeBackground !== "function") {
                throw new Error("Thư viện AI không cung cấp hàm xóa nền như mong đợi.");
            }
            return removeBackground;
        }).catch((error) => {
            backgroundRemovalModulePromise = null;
            throw error;
        });
    }
    return backgroundRemovalModulePromise;
}

backgroundRemoveButton.addEventListener("click", async () => {
    if (!backgroundSource || backgroundRemovalBusy) return;
    backgroundRemovalBusy = true;
    backgroundProgressWrap.hidden = false;
    backgroundProgress.value = 0;
    backgroundProgress.removeAttribute("value");
    setBackgroundStatus("Đang tải thư viện AI chạy trên thiết bị...");
    updateBackgroundControls();
    try {
        const removeBackground = await loadBackgroundRemovalModule();
        setBackgroundStatus("Đang khởi tạo mô hình AI; lần đầu có thể cần tải khoảng 40 MB...");
        const result = await removeBackground(backgroundSource, {
            model: "isnet_quint8",
            device: "cpu",
            progress: (key, current, total) => {
                const fraction = Number(total) > 0
                    ? Math.min(1, Math.max(0, Number(current) / Number(total)))
                    : null;
                if (fraction === null) {
                    backgroundProgress.removeAttribute("value");
                } else {
                    backgroundProgress.value = fraction * 100;
                }
                const stage = /fetch|download|asset/i.test(String(key))
                    ? "Đang tải mô hình AI"
                    : "Đang xử lý ảnh";
                const percent = fraction === null ? "" : ` (${Math.round(fraction * 100)}%)`;
                setBackgroundStatus(`${stage}${percent} · ${String(key).slice(0, 90)}`);
            },
        });
        if (!(result instanceof Blob) || result.type !== "image/png") {
            throw new Error("Mô hình không trả về ảnh PNG hợp lệ.");
        }
        revokeBackgroundUrl(backgroundResultUrl);
        backgroundResultBlob = result;
        backgroundResultUrl = URL.createObjectURL(result);
        renderBackgroundPreview();
        backgroundProgress.value = 100;
        setBackgroundStatus("Đã tách nền bằng mô hình AI. Ảnh xử lý vẫn ở trên thiết bị của bạn.");
    } catch (error) {
        const detail = error instanceof Error ? error.message : String(error);
        setBackgroundStatus(
            `Không thể tách nền: ${detail}. Kiểm tra kết nối tải mô hình hoặc thử ảnh nhỏ hơn.`,
            true
        );
    } finally {
        backgroundRemovalBusy = false;
        backgroundProgressWrap.hidden = true;
        updateBackgroundControls();
    }
});

backgroundMode.addEventListener("change", () => {
    renderBackgroundPreview();
    if (backgroundMode.value === "image" && !backgroundImageBitmap) {
        setBackgroundStatus("Chọn ảnh nền để xem trước và tải kết quả đã ghép.");
    }
});
backgroundColor.addEventListener("input", renderBackgroundPreview);
backgroundZoom.addEventListener("input", updateBackgroundZoom);
backgroundClearButton.addEventListener("click", clearBackgroundRemover);

async function downloadBackgroundResult() {
    if (!backgroundResultBlob) return;
    let outputBlob = backgroundResultBlob;
    if (backgroundMode.value !== "transparent") {
        if (backgroundMode.value === "image" && !backgroundImageBitmap) {
            throw new Error("Tải ảnh nền tùy chọn trước khi xuất kết quả.");
        }
        const foreground = await createImageBitmap(backgroundResultBlob);
        const canvas = document.createElement("canvas");
        canvas.width = foreground.width;
        canvas.height = foreground.height;
        const context = canvas.getContext("2d");
        if (!context) {
            foreground.close();
            throw new Error("Trình duyệt không thể tạo vùng vẽ để ghép nền.");
        }
        if (backgroundMode.value === "color") {
            context.fillStyle = backgroundColor.value;
            context.fillRect(0, 0, canvas.width, canvas.height);
        } else if (backgroundImageBitmap) {
            const coverScale = Math.max(
                canvas.width / backgroundImageBitmap.width,
                canvas.height / backgroundImageBitmap.height
            );
            const width = backgroundImageBitmap.width * coverScale;
            const height = backgroundImageBitmap.height * coverScale;
            context.drawImage(
                backgroundImageBitmap,
                (canvas.width - width) / 2,
                (canvas.height - height) / 2,
                width,
                height
            );
        }
        context.drawImage(foreground, 0, 0);
        foreground.close();
        outputBlob = await new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (blob) resolve(blob);
                else reject(new Error("Không thể mã hóa PNG để tải xuống."));
            }, "image/png");
        });
    }
    const url = URL.createObjectURL(outputBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${backgroundSource?.name.replace(/\.[^.]+$/, "") || "image"}-background-removed.png`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

backgroundDownloadButton.addEventListener("click", async () => {
    try {
        await downloadBackgroundResult();
        setBackgroundStatus(backgroundMode.value === "transparent"
            ? "Đã tải PNG nền trong suốt."
            : "Đã ghép và tải ảnh PNG.");
    } catch (error) {
        setBackgroundStatus(
            `Không thể tải kết quả: ${error instanceof Error ? error.message : String(error)}`,
            true
        );
    }
});

updateBackgroundZoom();
renderBackgroundPreview();

document.getElementById("compressPdfButton").addEventListener("click", () => {
    const status = document.getElementById("compressPdfStatus");
    const button = document.getElementById("compressPdfButton");
    runPdfOperation(status, button, async (pdfLib) => {
        const file = requirePdfFile(compressPdfFile.files[0]);
        const pdf = await readPdfDocument(file, pdfLib);
        const bytes = await pdf.save({ useObjectStreams: true });
        const filename = file.name.replace(/\.pdf$/i, "") || "document";
        downloadPdf(bytes, `${filename}-optimized.pdf`);
        const difference = file.size - bytes.byteLength;
        const sizeMessage = difference > 0
            ? `giảm ${formatFileSize(difference)}`
            : difference < 0
                ? `tăng ${formatFileSize(-difference)}`
                : "giữ nguyên kích thước";
        setStorageStatus(
            status,
            `Đã tối ưu cấu trúc PDF (${formatFileSize(file.size)} → ${formatFileSize(bytes.byteLength)}, ${sizeMessage}). Tệp đã nén sẵn có thể không nhỏ hơn.`
        );
    });
});

function formatFileSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    const units = ["KB", "MB", "GB"];
    let size = bytes / 1024;
    let unit = units[0];
    for (let index = 1; size >= 1024 && index < units.length; index++) {
        size /= 1024;
        unit = units[index];
    }
    return `${size.toFixed(1)} ${unit}`;
}

function parseInteger(value, radix) {
    const digits = value.trim().toLowerCase();
    const negative = digits.startsWith("-");
    const unsigned = digits.replace(/^[+-]/, "");
    const validDigits = radix === 16 ? /^[0-9a-f]+$/ :
        radix === 10 ? /^\d+$/ :
            radix === 8 ? /^[0-7]+$/ : /^[01]+$/;
    if (!validDigits.test(unsigned)) {
        throw new Error(`Giá trị không hợp lệ trong hệ cơ số ${radix}.`);
    }
    let result = 0n;
    for (const digit of unsigned) {
        const value = parseInt(digit, 16);
        result = result * BigInt(radix) + BigInt(value);
    }
    return negative ? -result : result;
}

document.getElementById("convertBase").addEventListener("click", () => {
    baseStatus.textContent = "";
    try {
        const value = parseInteger(baseInput.value, Number(sourceBase.value));
        [2, 8, 10, 16].forEach((radix) => {
            document.getElementById(`base${radix}`).textContent =
                value.toString(radix).toUpperCase();
        });
    } catch (error) {
        [2, 8, 10, 16].forEach((radix) => {
            document.getElementById(`base${radix}`).textContent = "—";
        });
        baseStatus.textContent = error.message;
    }
});

function setStorageStatus(element, message, isError = false) {
    element.textContent = message;
    element.classList.toggle("status-error", isError);
}

function setFormatterStatus(message, isError = false) {
    setStorageStatus(formatterStatus, message, isError);
}

function invalidateFormatterOutput() {
    hasFormattedCode = false;
    downloadCodeButton.disabled = true;
}

function updateFormatterLineNumbers() {
    const lineCount = formatterCode.value.split("\n").length;
    formatterLineNumbers.textContent = Array.from(
        { length: lineCount },
        (_, index) => index + 1
    ).join("\n");
    formatterLineNumbers.scrollTop = formatterCode.scrollTop;
}

function getCodeExtension(language) {
    return {
        c: "c",
        cpp: "cpp",
        java: "java",
        javascript: "js",
        python: "py",
    }[language];
}

function getFormatterError(error) {
    return error instanceof Error ? error.message : String(error);
}

async function loadClangFormatter() {
    if (!clangFormatterPromise) {
        clangFormatterPromise = (async () => {
            const module = await import(clangFormatterUrl);
            await module.default();
            return module.format;
        })().catch((error) => {
            clangFormatterPromise = null;
            throw error;
        });
    }
    return clangFormatterPromise;
}

async function loadPythonFormatter() {
    if (!pythonFormatterPromise) {
        pythonFormatterPromise = (async () => {
            const module = await import(pythonFormatterUrl);
            await module.default();
            return module.format;
        })().catch((error) => {
            pythonFormatterPromise = null;
            throw error;
        });
    }
    return pythonFormatterPromise;
}

async function formatSource(source, language, indentWidth) {
    if (language === "python") {
        const format = await loadPythonFormatter();
        return format(source, "main.py", {
            indent_style: "space",
            indent_width: indentWidth,
            line_width: 88,
        });
    }

    const format = await loadClangFormatter();
    const filename = `main.${getCodeExtension(language)}`;
    const style = JSON.stringify({
        BasedOnStyle: "LLVM",
        IndentWidth: indentWidth,
        TabWidth: indentWidth,
        UseTab: "Never",
        ColumnLimit: 0,
    });
    return format(source, filename, style);
}

formatterCode.addEventListener("input", () => {
    invalidateFormatterOutput();
    setFormatterStatus("");
    updateFormatterLineNumbers();
});

[formatterLanguage, formatterIndent].forEach((select) => {
    select.addEventListener("change", () => {
        invalidateFormatterOutput();
        setFormatterStatus(
            formatterCode.value
                ? "Tùy chọn đã thay đổi. Nhấn Format trước khi tải xuống."
                : ""
        );
    });
});

formatterCode.addEventListener("scroll", () => {
    formatterLineNumbers.scrollTop = formatterCode.scrollTop;
});

formatterFile.addEventListener("change", async () => {
    const file = formatterFile.files[0];
    if (!file) return;
    const languageByExtension = {
        c: "c",
        h: "c",
        cc: "cpp",
        cpp: "cpp",
        cxx: "cpp",
        hh: "cpp",
        hpp: "cpp",
        hxx: "cpp",
        java: "java",
        js: "javascript",
        mjs: "javascript",
        py: "python",
    };
    const extension = file.name.split(".").pop().toLowerCase();
    const language = languageByExtension[extension];
    if (!language) {
        formatterFile.value = "";
        setFormatterStatus(
            "Tệp không được hỗ trợ. Hãy chọn tệp C, C++, Java, JavaScript hoặc Python.",
            true
        );
        return;
    }

    try {
        formatterCode.value = await file.text();
        formatterLanguage.value = language;
        invalidateFormatterOutput();
        updateFormatterLineNumbers();
        setFormatterStatus(`Đã tải ${file.name}. Nhấn Format để định dạng.`);
        formatterCode.focus();
    } catch (error) {
        setFormatterStatus(
            `Không thể đọc tệp code: ${getFormatterError(error)}`,
            true
        );
    }
});

formatCodeButton.addEventListener("click", async () => {
    const source = formatterCode.value;
    if (!source.trim()) {
        hasFormattedCode = false;
        downloadCodeButton.disabled = true;
        setFormatterStatus("Nhập hoặc tải code trước khi định dạng.", true);
        return;
    }

    formatCodeButton.disabled = true;
    setFormatterStatus("Đang tải formatter nếu cần và định dạng cục bộ...");
    try {
        const formatted = await formatSource(
            source,
            formatterLanguage.value,
            Number(formatterIndent.value)
        );
        if (typeof formatted !== "string" || !formatted.trim()) {
            throw new Error("Formatter không trả về nội dung code.");
        }
        formatterCode.value = formatted;
        hasFormattedCode = true;
        downloadCodeButton.disabled = false;
        updateFormatterLineNumbers();
        setFormatterStatus("Đã định dạng code thành công trên thiết bị này.");
    } catch (error) {
        hasFormattedCode = false;
        downloadCodeButton.disabled = true;
        setFormatterStatus(
            `Không thể định dạng code: ${getFormatterError(error)}. Kiểm tra cú pháp và kết nối mạng, rồi thử lại.`,
            true
        );
    } finally {
        formatCodeButton.disabled = false;
    }
});

copyCodeButton.addEventListener("click", async () => {
    if (!formatterCode.value) {
        setFormatterStatus("Không có code để sao chép.", true);
        return;
    }
    try {
        await navigator.clipboard.writeText(formatterCode.value);
        setFormatterStatus("Đã sao chép code vào clipboard.");
    } catch (error) {
        setFormatterStatus(
            `Không thể sao chép code: ${getFormatterError(error)}`,
            true
        );
    }
});

clearCodeButton.addEventListener("click", () => {
    formatterCode.value = "";
    formatterFile.value = "";
    hasFormattedCode = false;
    downloadCodeButton.disabled = true;
    updateFormatterLineNumbers();
    setFormatterStatus("");
    formatterCode.focus();
});

downloadCodeButton.addEventListener("click", () => {
    if (!hasFormattedCode) {
        setFormatterStatus("Hãy định dạng code trước khi tải xuống.", true);
        return;
    }
    const sourceFile = formatterFile.files[0];
    const filename = sourceFile
        ? sourceFile.name
        : `formatted-code.${getCodeExtension(formatterLanguage.value)}`;
    const url = URL.createObjectURL(
        new Blob([formatterCode.value], { type: "text/plain;charset=utf-8" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setFormatterStatus(`Đã tải xuống ${filename}.`);
});

updateFormatterLineNumbers();

function cleanBigOSource(source) {
    const output = [...source];
    let quote = "";
    let inLineComment = false;
    let inBlockComment = false;

    for (let index = 0; index < source.length; index++) {
        const current = source[index];
        const next = source[index + 1];
        if (inLineComment) {
            if (current === "\n") inLineComment = false;
            else output[index] = " ";
            continue;
        }
        if (inBlockComment) {
            if (current === "*" && next === "/") {
                output[index] = " ";
                output[index + 1] = " ";
                index++;
                inBlockComment = false;
            } else if (current !== "\n") {
                output[index] = " ";
            }
            continue;
        }
        if (quote) {
            if (current === "\\") {
                output[index] = " ";
                if (index + 1 < source.length && next !== "\n") {
                    output[index + 1] = " ";
                    index++;
                }
            } else if (current === quote) {
                output[index] = " ";
                quote = "";
            } else if (current !== "\n") {
                output[index] = " ";
            }
            continue;
        }
        if (current === "/" && next === "/") {
            output[index] = " ";
            output[index + 1] = " ";
            index++;
            inLineComment = true;
        } else if (current === "/" && next === "*") {
            output[index] = " ";
            output[index + 1] = " ";
            index++;
            inBlockComment = true;
        } else if (current === "\"" || current === "'") {
            output[index] = " ";
            quote = current;
        }
    }
    return output.join("");
}

function findBigOMatch(source, start, opening, closing) {
    let depth = 0;
    for (let index = start; index < source.length; index++) {
        if (source[index] === opening) depth++;
        if (source[index] === closing) {
            depth--;
            if (depth === 0) return index;
        }
    }
    return -1;
}

function getBigOBoundGrowth(expression) {
    const bound = expression.replace(/[\s()]/g, "").toLowerCase();
    if (/^\d+$/.test(bound)) return { n: 0, log: 0, description: "hằng số" };
    if (/^[a-z_]\w*\*[a-z_]\w*$/.test(bound) &&
        bound.split("*")[0] === bound.split("*")[1]) {
        return { n: 2, log: 0, description: "bình phương kích thước đầu vào" };
    }
    if (/^[a-z_]\w*\^\s*2$/.test(bound)) {
        return { n: 2, log: 0, description: "bình phương kích thước đầu vào" };
    }
    if (/^[a-z_]\w*(?:\/\d+)?$/.test(bound)) {
        return { n: 1, log: 0, description: "phụ thuộc kích thước đầu vào" };
    }
    return null;
}

function getBigOLoopGrowth(kind, header, body, prefix = "") {
    const unknown = { n: 0, log: 0, description: "chưa nhận diện được" };
    if (kind === "for") {
        const parts = header.split(";");
        if (parts.length !== 3) return unknown;
        const condition = parts[1].trim();
        const step = parts[2].trim();
        const comparison = condition.match(
            /^\s*([A-Za-z_]\w*)\s*(<=|<|>=|>)\s*(.+?)\s*$/
        );
        if (!comparison) return unknown;
        const iterator = comparison[1];
        const stepChangesIterator = new RegExp(
            `(?:\\+\\+\\s*${iterator}\\b|\\b${iterator}\\s*\\+\\+|--\\s*${iterator}\\b|\\b${iterator}\\s*--|\\b${iterator}\\s*(?:\\+=\\s*\\d+|-=\\s*\\d+|\\*=\\s*\\d+|/=\\s*\\d+|<<=\\s*\\d+|>>=\\s*\\d+|=\\s*${iterator}\\s*[+*/-]\\s*\\d+))`
        ).test(step);
        if (!stepChangesIterator) return unknown;
        const bound = getBigOBoundGrowth(comparison[3]);
        if (!bound) return unknown;
        const startsFromInput =
            new RegExp(`\\b${iterator}\\s*=\\s*(?:n|m|size|length|count|rows|cols)\\b`, "i").test(parts[0]) ||
            new RegExp(`\\b${iterator}\\s*=\\s*(?:n|m|size|length|count|rows|cols)\\b`, "i").test(prefix);
        const doublesIterator = new RegExp(
            `\\b${iterator}\\s*(?:\\*=\\s*2|<<=\\s*1|=\\s*${iterator}\\s*\\*\\s*2)`
        ).test(step);
        const halvesIterator = new RegExp(
            `\\b${iterator}\\s*(?:/=\\s*2|>>=\\s*1|=\\s*${iterator}\\s*/\\s*2)`
        ).test(step);
        if (bound.n === 0) {
            if (startsFromInput && doublesIterator) {
                return { n: 0, log: 1, description: "tăng gấp đôi đến kích thước đầu vào" };
            }
            if (startsFromInput && halvesIterator) {
                return { n: 0, log: 1, description: "giảm một nửa đến hằng số" };
            }
            if (startsFromInput) {
                return { n: 1, log: 0, description: "lặp theo kích thước đầu vào" };
            }
            return { ...bound, description: "giới hạn cố định" };
        }
        if (doublesIterator) {
            return { n: 0, log: 1, description: "tăng gấp đôi mỗi vòng" };
        }
        if (halvesIterator) {
            return { n: 0, log: 1, description: "giảm một nửa mỗi vòng" };
        }
        return {
            n: bound.n,
            log: 0,
            description: bound.n > 1 ? "lặp đến bình phương đầu vào" : "lặp theo kích thước đầu vào",
        };
    }

    const condition = header.trim();
    const comparison = condition.match(
        /^\s*([A-Za-z_]\w*)\s*(<=|<|>=|>)\s*(.+?)\s*$/
    );
    if (!comparison) {
        if (/^\s*[A-Za-z_]\w*\s*(?:--|-\=\s*1)\s*$/.test(condition)) {
            return { n: 1, log: 0, description: "giảm từng đơn vị đến 0" };
        }
        return unknown;
    }

    const variable = comparison[1];
    const bound = getBigOBoundGrowth(comparison[3]);
    const startsFromInput = /^(?:n|m|size|length|count|rows|cols)$/i.test(variable) ||
        new RegExp(`\\b${variable}\\s*=\\s*(?:n|m|size|length|count|rows|cols)\\b`, "i").test(prefix);
    const dividesByTwo = new RegExp(
        `\\b${variable}\\s*(?:/=\\s*2|=\\s*${variable}\\s*/\\s*2|>>=\\s*1)`
    ).test(body);
    if (bound?.n === 0 && startsFromInput) {
        if (dividesByTwo) {
            return { n: 0, log: 1, description: "mỗi vòng chia đôi giá trị đầu vào" };
        }
        const inputChangesByOne = new RegExp(
            `(?:\\+\\+\\s*${variable}\\b|\\b${variable}\\s*\\+\\+|\\b${variable}\\s*--|--\\s*${variable}\\b|\\b${variable}\\s*(?:\\+=\\s*1|-=\\s*1|=\\s*${variable}\\s*[+-]\\s*1))`
        ).test(body);
        if (inputChangesByOne) {
            return { n: 1, log: 0, description: "mỗi vòng thay đổi từng đơn vị đầu vào" };
        }
        return unknown;
    }
    if (!bound) return unknown;
    if (bound.n === 0) {
        const fixedBoundChanges = new RegExp(
            `(?:\\+\\+\\s*${variable}\\b|\\b${variable}\\s*\\+\\+|\\b${variable}\\s*--|--\\s*${variable}\\b|\\b${variable}\\s*(?:\\+=\\s*\\d+|-=\\s*\\d+|=\\s*${variable}\\s*[+-]\\s*\\d+))`
        ).test(body);
        if (!fixedBoundChanges) return unknown;
        return { ...bound, description: "giới hạn cố định" };
    }
    if (dividesByTwo) {
        return { n: 0, log: 1, description: "mỗi vòng chia đôi giá trị" };
    }
    const increments = new RegExp(
        `(?:\\+\\+\\s*${variable}\\b|\\b${variable}\\s*\\+\\+|\\b${variable}\\s*\\+=\\s*\\d+|\\b${variable}\\s*=\\s*${variable}\\s*\\+\\s*\\d+)`
    ).test(body);
    const decrements = new RegExp(
        `(?:--\\s*${variable}\\b|\\b${variable}\\s*--|\\b${variable}\\s*-?=\\s*1)`
    ).test(body);
    if (increments || decrements) {
        return { n: bound.n, log: 0, description: "mỗi vòng thay đổi từng đơn vị" };
    }
    return unknown;
}

function findBigOLoops(source, warnings) {
    const loops = [];
    const pattern = /\b(for|while)\s*\(/g;
    let match;
    while ((match = pattern.exec(source)) !== null) {
        const openParen = source.indexOf("(", match.index);
        const closeParen = findBigOMatch(source, openParen, "(", ")");
        if (closeParen < 0) {
            warnings.push(`Không khép được phần điều kiện vòng lặp gần dòng ${source.slice(0, match.index).split("\n").length}.`);
            continue;
        }
        let bodyStart = closeParen + 1;
        while (/\s/.test(source[bodyStart] || "")) bodyStart++;
        let bodyEnd;
        let body;
        let hasBraces = source[bodyStart] === "{";
        if (hasBraces) {
            bodyEnd = findBigOMatch(source, bodyStart, "{", "}");
            if (bodyEnd < 0) {
                warnings.push(`Thiếu dấu } để phân tích vòng lặp gần dòng ${source.slice(0, match.index).split("\n").length}.`);
                continue;
            }
            body = source.slice(bodyStart + 1, bodyEnd);
        } else {
            bodyEnd = source.indexOf(";", bodyStart);
            if (bodyEnd < 0) bodyEnd = source.length - 1;
            body = source.slice(bodyStart, bodyEnd + 1);
            warnings.push(`Vòng lặp không dùng khối { } gần dòng ${source.slice(0, match.index).split("\n").length}; phạm vi thân vòng lặp có thể bị ước lượng thiếu.`);
        }
        const line = source.slice(0, match.index).split("\n").length;
        const header = source.slice(openParen + 1, closeParen);
        const growth = getBigOLoopGrowth(
            match[1],
            header,
            body,
            source.slice(0, match.index)
        );
        if (growth.description === "chưa nhận diện được") {
            warnings.push(`Chưa nhận diện được điều kiện/bước lặp gần dòng ${line}.`);
        }
        if (/\bbreak\b|\breturn\b/.test(body)) {
            warnings.push(`Vòng lặp gần dòng ${line} có thể kết thúc sớm.`);
        }
        loops.push({
            start: match.index,
            end: hasBraces ? bodyEnd + 1 : bodyEnd + 1,
            line,
            growth,
            bodyStart,
            bodyEnd,
        });
    }
    return loops;
}

function combineBigOGrowth(left, right) {
    if (left.exp || right.exp) {
        return { exp: Math.max(left.exp, right.exp), n: 0, log: 0 };
    }
    return {
        exp: 0,
        n: left.n + right.n,
        log: left.log + right.log,
    };
}

function getBigOLoopComplexity(loops, rangeStart = 0, rangeEnd = Infinity) {
    const selected = loops.filter((loop) =>
        loop.start >= rangeStart && loop.end <= rangeEnd
    );
    let maximum = { exp: 0, n: 0, log: 0 };
    selected.forEach((loop) => {
        const parents = selected.filter((candidate) =>
            candidate !== loop &&
            candidate.bodyStart <= loop.start &&
            candidate.bodyEnd >= loop.end
        );
        let growth = { exp: 0, n: loop.growth.n, log: loop.growth.log };
        parents.forEach((parent) => {
            growth = combineBigOGrowth(growth, {
                exp: 0,
                n: parent.growth.n,
                log: parent.growth.log,
            });
        });
        if (
            growth.exp > maximum.exp ||
            (!growth.exp && growth.n > maximum.n) ||
            (!growth.exp && growth.n === maximum.n && growth.log > maximum.log)
        ) {
            maximum = growth;
        }
    });
    return maximum;
}

function findBigOFunctions(source, loops, warnings) {
    const functions = [];
    const pattern =
        /(?:^|[;}\n])\s*(?:[\w~:*&<>,]+\s+)+([A-Za-z_]\w*)\s*\(([^;{}]*)\)\s*(?:const\s*)?\{/g;
    let match;
    while ((match = pattern.exec(source)) !== null) {
        const openBrace = match.index + match[0].lastIndexOf("{");
        const closeBrace = findBigOMatch(source, openBrace, "{", "}");
        if (closeBrace < 0) continue;
        const name = match[1];
        const parameters = match[2];
        const firstParameter = parameters.match(/([A-Za-z_]\w*)\s*(?:\[[^\]]*\])?\s*$/);
        if (!firstParameter) continue;
        const parameter = firstParameter[1];
        const body = source.slice(openBrace + 1, closeBrace);
        const calls = [...body.matchAll(
            new RegExp(`\\b${name}\\s*\\(([^()]*)\\)`, "g")
        )];
        if (!calls.length) continue;
        const callsAreInSeparateStatements = calls.length > 1 && calls
            .slice(1)
            .some((call, index) => {
                const previous = calls[index];
                const between = body.slice(
                    previous.index + previous[0].length,
                    call.index
                );
                return /;|\bif\s*\(/.test(between);
            });
        if (callsAreInSeparateStatements) {
            warnings.push(`Các lời gọi đệ quy trong "${name}" nằm ở các câu lệnh/nhánh riêng; chưa xác định được số nhánh chạy trên mỗi lần gọi.`);
            continue;
        }

        const firstArgument = (calls[0][1].split(",")[0] || "").trim();
        const reducesByOne = new RegExp(
            `(?:\\b${parameter}\\s*-\\s*1\\b|\\b${parameter}--|--\\s*${parameter})`
        ).test(firstArgument);
        const halves = new RegExp(
            `(?:\\b${parameter}\\s*/\\s*2\\b|\\b${parameter}\\s*>>\\s*1\\b)`
        ).test(firstArgument);
        const hasBaseCase = new RegExp(
            `\\bif\\s*\\([^)]*(?:${parameter}\\s*<=?\\s*1|${parameter}\\s*==\\s*0)[^)]*\\)`
        ).test(body);
        const functionLoops = loops.filter((loop) =>
            loop.start >= openBrace && loop.end <= closeBrace
        );
        const work = getBigOLoopComplexity(loops, openBrace, closeBrace);
        const line = source.slice(0, match.index).split("\n").length;
        if (!hasBaseCase) {
            warnings.push(`Hàm đệ quy "${name}" gần dòng ${line} không có mẫu điều kiện dừng đơn giản được nhận diện.`);
        }

        let growth = null;
        let stack;
        if (calls.length === 1 && reducesByOne) {
            growth = {
                exp: 0,
                n: Math.max(1, work.n + 1),
                log: work.n === 0 ? work.log : 0,
            };
            stack = { exp: 0, n: 1, log: 0 };
        } else if (calls.length === 1 && halves) {
            growth = work.n > 0
                ? { exp: 0, n: work.n, log: work.log }
                : { exp: 0, n: 0, log: Math.max(1, work.log) };
            stack = { exp: 0, n: 0, log: 1 };
        } else if (calls.length === 2 && reducesByOne) {
            growth = { exp: 1, n: 0, log: 0 };
            stack = { exp: 0, n: 1, log: 0 };
        } else if (calls.length === 2 && halves) {
            growth = work.n > 0
                ? { exp: 0, n: work.n, log: work.n === 1 ? work.log + 1 : work.log }
                : { exp: 0, n: 1, log: 0 };
            stack = { exp: 0, n: 0, log: 1 };
        }

        if (!growth) {
            warnings.push(`Dạng đệ quy trong hàm "${name}" gần dòng ${line} nằm ngoài các mẫu cơ bản được hỗ trợ.`);
            continue;
        }
        functions.push({
            name,
            line,
            calls: calls.length,
            growth,
            stack,
            loopCount: functionLoops.length,
            hasBaseCase,
            reduction: reducesByOne ? "giảm n đi 1" : "chia n cho 2",
        });
    }
    return functions;
}

function formatBigOGrowth(growth) {
    if (growth.exp) return `O(2^n)`;
    const terms = [];
    if (growth.n > 0) {
        terms.push(growth.n === 1 ? "n" : `n^${growth.n}`);
    }
    if (growth.log > 0) {
        terms.push(growth.log === 1 ? "log n" : `(log n)^${growth.log}`);
    }
    return `O(${terms.join(" ") || "1"})`;
}

function compareBigOGrowth(left, right) {
    if (left.exp !== right.exp) return left.exp - right.exp;
    if (left.n !== right.n) return left.n - right.n;
    return left.log - right.log;
}

function getBigOExample(growth) {
    if (growth.exp) return "Nếu n = 10, O(2^n) tương ứng khoảng 1.024 nhánh gọi; số bước tăng rất nhanh.";
    if (growth.n === 0 && growth.log) {
        return `Nếu n = 16, O(log n) cần khoảng 4 lần lặp (log₂ 16 = 4).`;
    }
    if (growth.n === 1 && growth.log === 1) {
        return "Nếu n = 10, O(n log n) vào khoảng 10 × log₂ 10 ≈ 34 đơn vị công việc.";
    }
    if (growth.n === 1) return "Nếu n = 10, O(n) tăng xấp xỉ 10 đơn vị công việc.";
    if (growth.n === 2) return "Nếu n = 10, O(n²) có khoảng 100 cặp/lần xử lý.";
    if (growth.n > 2) return `Nếu n = 10, O(n^${growth.n}) có khoảng ${10 ** growth.n} đơn vị công việc.`;
    return "Nếu kích thước đầu vào tăng gấp đôi, số thao tác của mẫu O(1) không tăng theo n.";
}

function renderBigOAnalysis(result) {
    bigOTime.textContent = result.time
        ? formatBigOGrowth(result.time)
        : "Chưa rõ";
    bigOSpace.textContent = formatBigOGrowth(result.space);
    bigOConfidence.textContent = result.confidence;
    bigOSteps.replaceChildren();
    result.steps.forEach((step) => {
        const item = document.createElement("li");
        item.textContent = step;
        bigOSteps.append(item);
    });
    bigOWarnings.replaceChildren();
    result.warnings.forEach((warning) => {
        const item = document.createElement("li");
        item.textContent = warning;
        bigOWarnings.append(item);
    });
    bigOWarningBox.hidden = result.warnings.length === 0;
    bigOExample.textContent = result.example;
    bigOResults.hidden = false;
}

function analyzeBigO(source) {
    const warnings = [];
    const code = cleanBigOSource(source);
    const delimiterStack = [];
    const pairs = { "(": ")", "[": "]", "{": "}" };
    const closing = new Set(Object.values(pairs));
    for (let index = 0; index < code.length; index++) {
        if (pairs[code[index]]) delimiterStack.push({ value: pairs[code[index]], index });
        else if (closing.has(code[index])) {
            const expected = delimiterStack.pop();
            if (!expected || expected.value !== code[index]) {
                warnings.push(`Dấu ngoặc không khớp gần dòng ${code.slice(0, index).split("\n").length}.`);
                break;
            }
        }
    }
    if (delimiterStack.length) warnings.push("Có dấu ngoặc chưa đóng; kết quả có thể không đáng tin cậy.");
    if (source.length > 20000) warnings.push("Đoạn code dài; phiên bản đầu chỉ hướng đến ví dụ ngắn, cơ bản.");
    if (/\bgoto\b|->\s*\w+|\(\s*\*\s*\w+\s*\)/.test(code)) {
        warnings.push("Phát hiện goto, truy cập con trỏ hoặc hàm qua con trỏ; luồng điều khiển này chưa được mô hình hóa.");
    }

    const loops = findBigOLoops(code, warnings);
    if (loops.length > 12) warnings.push("Có nhiều vòng lặp; việc ghép các nhánh và phạm vi lồng nhau có thể thiếu chính xác.");
    if (/\b(?:i|j|k)\s*<\s*(?:m|size|length|count|rows|cols)\b/i.test(code)) {
        warnings.push("Các kích thước đầu vào ngoài n được quy về n; nếu chúng tăng độc lập, cần biểu diễn nhiều biến như O(n·m).");
    }
    const functions = findBigOFunctions(code, loops, warnings);
    const recursiveFunctionNames = new Set(functions.map((item) => item.name));

    const loopGrowth = getBigOLoopComplexity(loops);
    let time = { ...loopGrowth };
    let recursionStack = { exp: 0, n: 0, log: 0 };
    functions.forEach((fn) => {
        if (compareBigOGrowth(fn.growth, time) > 0) time = fn.growth;
        if (compareBigOGrowth(fn.stack, recursionStack) > 0) recursionStack = fn.stack;
    });

    const allocationPatterns = [
        { pattern: /\bnew\s+[\w:]+\s*\[\s*([A-Za-z_]\w*)/g, label: "mảng cấp phát động" },
        { pattern: /\b(?:malloc|calloc)\s*\([^)]*\b([A-Za-z_]\w*)\b/g, label: "bộ nhớ cấp phát động" },
        { pattern: /\b(?:vector|list|deque|string)\s*<[^;{}]+>\s+\w+\s*(?:\([^;]*\))?\s*;/g, label: "container STL" },
        { pattern: /(?:^|[;{}])\s*[\w:]+\s+\w+\s*\[\s*(?:n|m|size|length|count)\s*\]/gim, label: "mảng kích thước biến đổi" },
    ];
    let allocatedInputMemory = false;
    allocationPatterns.forEach(({ pattern, label }) => {
        const matches = [...code.matchAll(pattern)];
        if (!matches.length) return;
        const inputSized = matches.some((item) =>
            /\b(?:n|m|size|length|count|rows|cols)\b/i.test(item[0])
        );
        if (inputSized) {
            allocatedInputMemory = true;
            warnings.push(`Nhận diện ${label} có vẻ phụ thuộc đầu vào; ước lượng bộ nhớ tính phần cấp phát này.`);
        } else {
            warnings.push(`Có ${label}; kích thước cấp phát không được xác định chắc chắn.`);
        }
    });

    const hasUnknownLoop = loops.some(
        (loop) => loop.growth.description === "chưa nhận diện được"
    );
    const hasUnsupportedRecursion = warnings.some((warning) =>
        warning.startsWith("Các lời gọi đệ quy") ||
        warning.startsWith("Dạng đệ quy")
    );
    const timeHasDynamicStructure = loops.length > 0 || functions.length > 0;
    if (!timeHasDynamicStructure && !hasUnsupportedRecursion) {
        warnings.push("Không nhận diện được vòng lặp hoặc đệ quy cơ bản; độ phức tạp của lời gọi hàm khác có thể chưa được tính.");
    }
    const cannotEstimateTime = hasUnknownLoop || hasUnsupportedRecursion;

    const space = allocatedInputMemory
        ? { exp: 0, n: 1, log: 0 }
        : recursionStack;
    const steps = [];
    if (!loops.length && !functions.length && !hasUnsupportedRecursion) {
        steps.push("Không tìm thấy vòng lặp/đệ quy theo các mẫu được hỗ trợ; tạm ước lượng phần code nhìn thấy là O(1).");
    }
    loops.forEach((loop) => {
        const growth = loop.growth;
        steps.push(
            `Dòng ${loop.line}: vòng lặp ${growth.description}; đóng góp ${formatBigOGrowth({ exp: 0, ...growth })}.`
        );
    });
    functions.forEach((fn) => {
        const growthLabel = fn.calls === 2
            ? `${fn.calls} lời gọi đệ quy, ${fn.reduction}`
            : `1 lời gọi đệ quy, ${fn.reduction}`;
        steps.push(
            `Dòng ${fn.line}: hàm "${fn.name}" có ${growthLabel}; ước lượng phần đệ quy ${formatBigOGrowth(fn.growth)}${fn.loopCount ? " (có tính công việc vòng lặp trong hàm)" : ""}.`
        );
    });
    if (loops.length > 1) {
        steps.push("Các vòng lặp tuần tự lấy bậc tăng trưởng lớn nhất; vòng lặp lồng nhau nhân số lần lặp.");
    }
    if (cannotEstimateTime) {
        steps.push("Không thể đưa ra ước lượng thời gian tổng thể đáng tin cậy vì có vòng lặp hoặc đệ quy chưa được mô hình hóa.");
    } else {
        steps.push(`Chọn mẫu tăng nhanh nhất đã nhận diện làm thời gian tổng thể: ${formatBigOGrowth(time)}.`);
    }
    if (allocatedInputMemory) {
        steps.push("Bộ nhớ phụ: nhận diện cấp phát/container phụ thuộc đầu vào, ước lượng O(n).");
    } else if (recursionStack.n || recursionStack.log) {
        steps.push(`Bộ nhớ phụ: tính ngăn xếp đệ quy theo độ sâu, ${formatBigOGrowth(recursionStack)}.`);
    } else {
        steps.push("Bộ nhớ phụ: không nhận diện cấp phát phụ thuộc n; tạm ước lượng O(1), không tính dữ liệu đầu vào.");
    }

    const confidence = warnings.length
        ? "Thấp — có cảnh báo"
        : timeHasDynamicStructure
            ? "Trung bình — mẫu cơ bản"
            : "Thấp — code thẳng";
    return {
        time: cannotEstimateTime ? null : time,
        space,
        confidence,
        steps,
        warnings,
        example: cannotEstimateTime
            ? "Không có ví dụ định lượng vì chưa xác định được bậc tăng trưởng của một cấu trúc trong code."
            : getBigOExample(time),
    };
}

function updateBigOLineNumbers() {
    bigOLineNumbers.textContent = Array.from(
        { length: bigOCode.value.split("\n").length },
        (_, index) => index + 1
    ).join("\n");
    bigOLineNumbers.scrollTop = bigOCode.scrollTop;
}

bigOCode.addEventListener("input", () => {
    bigOResults.hidden = true;
    bigOStatus.textContent = "";
    bigOStatus.classList.remove("status-error");
    updateBigOLineNumbers();
});

bigOCode.addEventListener("scroll", () => {
    bigOLineNumbers.scrollTop = bigOCode.scrollTop;
});

analyzeBigOButton.addEventListener("click", () => {
    bigOStatus.textContent = "";
    bigOStatus.classList.remove("status-error");
    if (!bigOCode.value.trim()) {
        bigOResults.hidden = true;
        setStorageStatus(bigOStatus, "Hãy nhập hoặc dán code C/C++ trước khi phân tích.", true);
        return;
    }
    try {
        renderBigOAnalysis(analyzeBigO(bigOCode.value));
        bigOStatus.textContent = "Đã hoàn tất phân tích tĩnh. Kết quả là ước lượng, không phải chứng minh.";
    } catch (error) {
        bigOResults.hidden = true;
        setStorageStatus(
            bigOStatus,
            `Không thể phân tích code: ${error instanceof Error ? error.message : String(error)}`,
            true
        );
    }
});

clearBigOButton.addEventListener("click", () => {
    bigOCode.value = "";
    bigOResults.hidden = true;
    setStorageStatus(bigOStatus, "");
    updateBigOLineNumbers();
    bigOCode.focus();
});

updateBigOLineNumbers();

function loadAlgorithmModule() {
    if (!algorithmModulePromise) {
        algorithmModulePromise = import("./algorithm-visualizer.mjs").catch((error) => {
            algorithmModulePromise = null;
            throw error;
        });
    }
    return algorithmModulePromise;
}

function setAlgorithmStatus(message, isError = false) {
    setStorageStatus(algorithmStatus, message, isError);
}

function getAlgorithmSpeedDelay() {
    return 1100 - Number(algorithmSpeed.value) * 100;
}

function pauseAlgorithmPlayback() {
    algorithmIsPlaying = false;
    if (algorithmPlaybackTimeout !== null) {
        window.clearTimeout(algorithmPlaybackTimeout);
        algorithmPlaybackTimeout = null;
    }
    algorithmPause.disabled = true;
    algorithmStart.disabled = algorithmFrameIndex >= algorithmFrames.length - 1 &&
        algorithmFrames.length > 0;
    updateAlgorithmControls();
}

function updateAlgorithmControls() {
    const hasFrames = algorithmFrames.length > 0;
    algorithmPrevious.disabled = !hasFrames || algorithmFrameIndex <= 0 ||
        algorithmIsPlaying || algorithmIsPreparing;
    algorithmNext.disabled = algorithmIsPlaying || algorithmIsPreparing ||
        (hasFrames && algorithmFrameIndex >= algorithmFrames.length - 1);
    algorithmReset.disabled = algorithmIsPlaying || algorithmIsPreparing;
    algorithmPause.disabled = !algorithmIsPlaying;
    algorithmStart.disabled = algorithmIsPlaying || algorithmIsPreparing ||
        (hasFrames && algorithmFrameIndex >= algorithmFrames.length - 1);
    algorithmStepCount.textContent = hasFrames
        ? `Bước ${algorithmFrameIndex + 1} / ${algorithmFrames.length}`
        : "Bước 0 / 0";
}

function renderSortFrame(frame) {
    const { array, sorted = [], visited = [], auxiliary } = frame.state;
    const comparing = new Set(frame.active.comparing || []);
    const swapping = new Set(frame.active.swapping || []);
    const found = frame.active.found;
    const maximum = Math.max(1, ...array.map((value) => Math.abs(value)));
    sortArrayView.replaceChildren();
    array.forEach((value, index) => {
        const item = document.createElement("div");
        item.className = "sort-array-item";
        if (sorted.includes(index)) item.classList.add("sort-array-sorted");
        if (visited.includes(index)) item.classList.add("sort-array-visited");
        if (found === index) item.classList.add("sort-array-found");
        if (comparing.has(index)) item.classList.add("sort-array-active");
        if (swapping.has(index)) item.classList.add("sort-array-swapping");
        item.setAttribute("aria-label", `Chỉ số ${index}, giá trị ${value}`);

        const bar = document.createElement("span");
        bar.className = "sort-array-bar";
        bar.style.height = `${Math.max(10, Math.abs(value) / maximum * 150)}px`;
        const label = document.createElement("strong");
        label.textContent = String(value);
        const indexLabel = document.createElement("small");
        indexLabel.textContent = `[${index}]`;
        item.append(bar, label, indexLabel);
        sortArrayView.append(item);
    });
    if (auxiliary) {
        const auxiliaryRow = document.createElement("p");
        auxiliaryRow.className = "sort-auxiliary";
        auxiliaryRow.textContent = `Mảng phụ: ${auxiliary.join(", ")}`;
        sortArrayView.append(auxiliaryRow);
    }
}

function renderGraphFrame(frame) {
    const {
        vertices,
        edges,
        queue = [],
        stack = [],
        visited = [],
        settled = [],
        distances = {},
        traversal = [],
    } = frame.state;
    graphSvg.setAttribute("aria-label", `Đồ thị và trạng thái ${algorithmChoice.value.toUpperCase()}`);
    const pending = algorithmChoice.value === "dfs" ? stack : queue;
    const { width, height } = { width: 600, height: 360 };
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = vertices.length <= 1
        ? 0
        : Math.min(130, 100 + vertices.length * 2);
    const positions = new Map(vertices.map((vertex, index) => {
        const angle = -Math.PI / 2 + index * Math.PI * 2 / vertices.length;
        return [vertex, {
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
        }];
    }));
    graphSvg.replaceChildren();
    const definitions = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", "graphArrowHead");
    marker.setAttribute("viewBox", "0 0 8 6");
    marker.setAttribute("refX", "7");
    marker.setAttribute("refY", "3");
    marker.setAttribute("markerWidth", "8");
    marker.setAttribute("markerHeight", "6");
    marker.setAttribute("orient", "auto");
    const arrowHead = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrowHead.setAttribute("d", "M0,0 L8,3 L0,6 Z");
    arrowHead.setAttribute("fill", "#7899a7");
    marker.append(arrowHead);
    definitions.append(marker);
    graphSvg.append(definitions);

    edges.forEach((edge) => {
        const from = positions.get(edge.from);
        const to = positions.get(edge.to);
        if (!from || !to) return;
        const reverseActive = edge.undirected &&
            frame.active.activeEdge?.[0] === edge.to &&
            frame.active.activeEdge?.[1] === edge.from;
        const active = (
            frame.active.activeEdge?.[0] === edge.from &&
            frame.active.activeEdge?.[1] === edge.to
        ) || reverseActive;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", from.x);
        line.setAttribute("y1", from.y);
        line.setAttribute("x2", to.x);
        line.setAttribute("y2", to.y);
        line.setAttribute("class", `graph-edge${active ? " graph-edge-active" : ""}`);
        if (!edge.undirected) line.setAttribute("marker-end", "url(#graphArrowHead)");
        graphSvg.append(line);

        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", (from.x + to.x) / 2);
        label.setAttribute("y", (from.y + to.y) / 2 - 5);
        label.setAttribute("class", "graph-edge-label");
        label.textContent = String(edge.weight);
        graphSvg.append(label);
    });

    vertices.forEach((vertex) => {
        const position = positions.get(vertex);
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.setAttribute("class", [
            "graph-node",
            (visited.includes(vertex) || settled.includes(vertex)) ? "graph-node-visited" : "",
            pending.includes(vertex) ? "graph-node-queued" : "",
            frame.active.activeVertex === vertex ? "graph-node-active" : "",
            frame.active.discovered === vertex ? "graph-node-discovered" : "",
        ].filter(Boolean).join(" "));
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", position.x);
        circle.setAttribute("cy", position.y);
        circle.setAttribute("r", 25);
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", position.x);
        label.setAttribute("y", position.y + 5);
        label.textContent = vertex;
        const distance = document.createElementNS("http://www.w3.org/2000/svg", "text");
        distance.setAttribute("x", position.x);
        distance.setAttribute("y", position.y + 43);
        distance.setAttribute("class", "graph-distance");
        distance.textContent = distances[vertex] === null || distances[vertex] === undefined ||
            distances[vertex] === Infinity
            ? "∞"
            : algorithmChoice.value === "dijkstra"
                ? `d=${distances[vertex]}`
                : `d=${distances[vertex]}`;
        group.append(circle, label, distance);
        graphSvg.append(group);
    });

    graphProgress.replaceChildren();
    [
        [algorithmChoice.value === "dfs" ? "Ngăn xếp" : "Hàng đợi", pending.join(" → ") || "trống"],
        ["Thứ tự đã thăm", traversal.join(" → ") || "chưa có"],
    ].forEach(([title, value]) => {
        const item = document.createElement("p");
        const label = document.createElement("strong");
        label.textContent = `${title}: `;
        item.append(label, document.createTextNode(value));
        graphProgress.append(item);
    });
    if (algorithmChoice.value === "dijkstra") {
        const item = document.createElement("p");
        const label = document.createElement("strong");
        label.textContent = "Khoảng cách: ";
        const values = vertices.map((vertex) =>
            `${vertex}=${distances[vertex] === Infinity ? "∞" : distances[vertex] ?? "∞"}`
        );
        item.append(label, document.createTextNode(values.join(" · ")));
        graphProgress.append(item);
    }
}

function renderAlgorithmFrame() {
    const frame = algorithmFrames[algorithmFrameIndex];
    if (!frame) {
        updateAlgorithmControls();
        return;
    }
    if (["bfs", "dfs", "dijkstra"].includes(algorithmChoice.value)) {
        renderGraphFrame(frame);
    } else {
        renderSortFrame(frame);
    }
    setAlgorithmStatus(frame.status);
    algorithmOutcome.hidden = !frame.active.complete;
    algorithmOutcome.textContent = frame.active.complete
        ? frame.status
        : "";
    updateAlgorithmControls();
}

function parseSortArray() {
    const tokens = sortArrayInput.value.trim().split(/[\s,;]+/).filter(Boolean);
    if (!tokens.length) throw new Error("Nhập ít nhất một số để sắp xếp.");
    if (tokens.length > 30) throw new Error("Mảng tối đa 30 phần tử để mô phỏng mượt.");
    const values = tokens.map(Number);
    if (values.some((value) => !Number.isInteger(value) || value < -999 || value > 999)) {
        throw new Error("Chỉ hỗ trợ số nguyên từ -999 đến 999.");
    }
    return values;
}

function updateAlgorithmMode() {
    pauseAlgorithmPlayback();
    algorithmFrames = [];
    algorithmFrameIndex = -1;
    algorithmStatus.textContent = "";
    algorithmStatus.classList.remove("status-error");
    algorithmOutcome.hidden = true;
    const mode = algorithmChoice.value;
    const graphMode = ["bfs", "dfs", "dijkstra"].includes(mode);
    const searchMode = ["linear", "binary"].includes(mode);
    sortInputControls.hidden = graphMode;
    graphInputControls.hidden = !graphMode;
    sortVisualization.hidden = graphMode;
    graphVisualization.hidden = !graphMode;
    searchTargetControl.hidden = !searchMode;
    randomArrayButton.hidden = searchMode;

    const settings = {
        bubble: {
            name: "Bubble Sort",
            short: "O(n²) trung bình/xấu nhất; O(n) tốt nhất",
            full: "Bubble Sort so sánh phần tử kề nhau. Trung bình/xấu nhất O(n²), tốt nhất O(n) khi mảng đã có thứ tự; bộ nhớ phụ O(1).",
        },
        selection: {
            name: "Selection Sort",
            short: "O(n²) mọi trường hợp",
            full: "Selection Sort tìm giá trị nhỏ nhất của phần chưa sắp xếp ở mỗi lượt. Thời gian O(n²) mọi trường hợp; bộ nhớ phụ O(1).",
        },
        insertion: {
            name: "Insertion Sort",
            short: "O(n²) trung bình/xấu nhất; O(n) tốt nhất",
            full: "Insertion Sort chèn từng giá trị vào đoạn bên trái đã sắp xếp. Trung bình/xấu nhất O(n²), tốt nhất O(n) khi mảng gần/đã có thứ tự; bộ nhớ phụ O(1).",
        },
        merge: {
            name: "Merge Sort",
            short: "O(n log n); bộ nhớ phụ O(n)",
            full: "Merge Sort chia đôi rồi trộn các đoạn đã sắp xếp. Thời gian O(n log n) mọi trường hợp; mảng phụ dùng O(n) bộ nhớ.",
        },
        linear: {
            name: "Linear Search",
            short: "O(n) xấu nhất; O(1) bộ nhớ phụ",
            full: "Linear Search kiểm tra lần lượt từng phần tử. Xấu nhất O(n), tốt nhất O(1); bộ nhớ phụ O(1).",
        },
        binary: {
            name: "Binary Search",
            short: "O(log n); O(1) bộ nhớ phụ",
            full: "Binary Search loại bỏ một nửa khoảng tìm kiếm ở mỗi bước. Thời gian O(log n), bộ nhớ phụ O(1). Mảng đầu vào phải được sắp xếp tăng dần.",
        },
        bfs: {
            name: "BFS",
            short: "O(V + E); bộ nhớ phụ O(V)",
            full: "BFS dùng hàng đợi FIFO, thăm mỗi đỉnh và xét mỗi cạnh tối đa một lần: O(V + E), bộ nhớ phụ O(V). Khoảng cách là số cạnh, không xét trọng số.",
        },
        dfs: {
            name: "DFS",
            short: "O(V + E); bộ nhớ phụ O(V)",
            full: "DFS dùng ngăn xếp, thăm mỗi đỉnh và xét mỗi cạnh tối đa một lần: O(V + E), bộ nhớ phụ O(V).",
        },
        dijkstra: {
            name: "Dijkstra",
            short: "O(V² + E); bộ nhớ phụ O(V)",
            full: "Dijkstra chọn đỉnh chưa chốt có khoảng cách nhỏ nhất bằng quét tuyến tính: O(V² + E), bộ nhớ phụ O(V). Chỉ chấp nhận trọng số không âm.",
        },
    }[mode];
    algorithmComplexity.textContent = `Thời gian ${settings.short}.`;
    algorithmComplexityDetails.textContent = settings.full;
    graphAlgorithmHeading.textContent = `Đồ thị — ${settings.name}`;
    graphAlgorithmHint.textContent = mode === "bfs"
        ? "BFS dùng hàng đợi FIFO; khoảng cách tính theo số cạnh, không xét trọng số."
        : mode === "dfs"
            ? "DFS dùng ngăn xếp; khoảng cách hiển thị là độ sâu phát hiện, không phải đường đi ngắn nhất."
            : "Dijkstra tìm đường đi ngắn nhất; mọi trọng số cạnh phải là số không âm.";
    algorithmOutcome.hidden = true;
    algorithmOutcome.textContent = "";
    arrayInputLabel.textContent = searchMode
        ? "Mảng số (phân cách bằng dấu phẩy hoặc khoảng trắng)"
        : "Mảng số cần sắp xếp";
    const hint = sortInputControls.querySelector(".utility-hint");
    hint.textContent = searchMode
        ? mode === "binary"
            ? "Tối đa 30 số. Binary Search yêu cầu mảng đã sắp xếp tăng dần."
            : "Tối đa 30 số; Linear Search không yêu cầu mảng đã sắp xếp."
        : "Tối đa 30 số nguyên từ -999 đến 999 để mô phỏng mượt.";
    updateAlgorithmControls();
    if (graphMode) {
        renderGraphFrame({
            state: {
                vertices: visualizerGraph.vertices,
                edges: visualizerGraph.edges,
                queue: [],
                stack: [],
                visited: [],
                settled: [],
                distances: Object.fromEntries(visualizerGraph.vertices.map((vertex) => [
                    vertex,
                    mode === "dijkstra" ? Infinity : null,
                ])),
                traversal: [],
            },
            active: {},
        });
    } else {
        try {
            const array = parseSortArray();
            renderSortFrame({ state: { array, sorted: [], visited: [] }, active: {} });
        } catch {
            sortArrayView.replaceChildren();
        }
    }
}

function prepareAlgorithmRun() {
    if (algorithmPreparationPromise) return algorithmPreparationPromise;
    algorithmIsPreparing = true;
    updateAlgorithmControls();
    algorithmPreparationPromise = (async () => {
        try {
            const module = await loadAlgorithmModule();
            const mode = algorithmChoice.value;
            const array = ["bubble", "selection", "insertion", "merge", "linear", "binary"]
                .includes(mode)
                ? parseSortArray()
                : null;
            const target = searchTarget.value.trim() === ""
                ? NaN
                : Number(searchTarget.value);
            const algorithms = {
                bubble: () => module.bubbleSortSteps(array),
                selection: () => module.selectionSortSteps(array),
                insertion: () => module.insertionSortSteps(array),
                merge: () => module.mergeSortSteps(array),
                linear: () => module.linearSearchSteps(array, target),
                binary: () => module.binarySearchSteps(array, target),
                bfs: () => module.bfsSteps(visualizerGraph, bfsStartVertex.value),
                dfs: () => module.dfsSteps(visualizerGraph, bfsStartVertex.value),
                dijkstra: () => module.dijkstraSteps(visualizerGraph, bfsStartVertex.value),
            };
            const steps = algorithms[mode]();
            algorithmFrames = [...steps];
            if (!algorithmFrames.length) {
                throw new Error("Thuật toán không tạo được bước mô phỏng.");
            }
            algorithmFrameIndex = 0;
            renderAlgorithmFrame();
        } finally {
            algorithmIsPreparing = false;
            algorithmPreparationPromise = null;
            updateAlgorithmControls();
        }
    })();
    return algorithmPreparationPromise;
}

async function stepAlgorithmForward() {
    if (algorithmIsPreparing || algorithmIsPlaying) return;
    try {
        if (!algorithmFrames.length) await prepareAlgorithmRun();
        if (algorithmFrameIndex < algorithmFrames.length - 1) {
            algorithmFrameIndex++;
            renderAlgorithmFrame();
        }
        if (algorithmFrameIndex >= algorithmFrames.length - 1) {
            pauseAlgorithmPlayback();
            updateAlgorithmControls();
        }
    } catch (error) {
        pauseAlgorithmPlayback();
        setAlgorithmStatus(
            `Không thể bắt đầu mô phỏng: ${error instanceof Error ? error.message : String(error)}`,
            true
        );
    }
}

function scheduleAlgorithmStep() {
    if (!algorithmIsPlaying) return;
    algorithmPlaybackTimeout = window.setTimeout(async () => {
        algorithmPlaybackTimeout = null;
        if (!algorithmIsPlaying) return;
        if (algorithmFrameIndex >= algorithmFrames.length - 1) {
            pauseAlgorithmPlayback();
            return;
        }
        algorithmFrameIndex++;
        renderAlgorithmFrame();
        if (algorithmFrameIndex >= algorithmFrames.length - 1) {
            pauseAlgorithmPlayback();
            updateAlgorithmControls();
            return;
        }
        scheduleAlgorithmStep();
    }, getAlgorithmSpeedDelay());
}

function setGraphVertexOptions() {
    const options = visualizerGraph.vertices.map((vertex) => {
        const option = document.createElement("option");
        option.value = vertex;
        option.textContent = vertex;
        return option;
    });
    [removeVertexSelect, edgeFrom, edgeTo, bfsStartVertex].forEach((select) => {
        const previous = select.value;
        select.replaceChildren(...options.map((option) => option.cloneNode(true)));
        if (visualizerGraph.vertices.includes(previous)) select.value = previous;
    });
    const canAddEdge = visualizerGraph.vertices.length >= 2;
    edgeFrom.disabled = !canAddEdge;
    edgeTo.disabled = !canAddEdge;
    removeVertexButton.disabled = !visualizerGraph.vertices.length;
}

function renderGraphEdges() {
    graphEdgeList.replaceChildren();
    if (!visualizerGraph.edges.length) {
        const empty = document.createElement("p");
        empty.className = "graph-edge-empty";
        empty.textContent = "Chưa có cạnh. Thêm cạnh để kết nối các đỉnh.";
        graphEdgeList.append(empty);
        return;
    }
    visualizerGraph.edges.forEach((edge, index) => {
        const row = document.createElement("div");
        row.className = "graph-edge-row-item";
        const description = document.createElement("span");
        description.textContent =
            `${edge.from} ${edge.undirected ? "↔" : "→"} ${edge.to}`;
        const weight = document.createElement("input");
        weight.type = "number";
        weight.min = "0";
        weight.max = "999";
        weight.step = "1";
        weight.value = String(edge.weight);
        weight.setAttribute("aria-label", `Trọng số cạnh ${edge.from} đến ${edge.to}`);
        weight.addEventListener("change", () => {
            const value = Number(weight.value);
            if (!Number.isInteger(value) || value < 0 || value > 999) {
                setAlgorithmStatus("Trọng số cạnh phải là số nguyên không âm từ 0 đến 999.", true);
                weight.value = String(edge.weight);
                return;
            }
            visualizerGraph.edges[index].weight = value;
            resetAlgorithmPlayback();
        });
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "text-button";
        remove.textContent = "Xóa cạnh";
        remove.setAttribute("aria-label", `Xóa cạnh ${edge.from} đến ${edge.to}`);
        remove.addEventListener("click", () => {
            visualizerGraph.edges.splice(index, 1);
            resetAlgorithmPlayback();
            renderGraphEdges();
        });
        row.append(description, weight, remove);
        graphEdgeList.append(row);
    });
}

function resetAlgorithmPlayback() {
    pauseAlgorithmPlayback();
    algorithmFrames = [];
    algorithmFrameIndex = -1;
    algorithmStatus.textContent = "";
    algorithmStatus.classList.remove("status-error");
    updateAlgorithmMode();
}

algorithmChoice.addEventListener("change", updateAlgorithmMode);
algorithmSpeed.addEventListener("input", () => {
    algorithmSpeedValue.value = algorithmSpeed.value;
    algorithmSpeedValue.textContent = algorithmSpeed.value;
});
sortArrayInput.addEventListener("input", resetAlgorithmPlayback);
searchTarget.addEventListener("input", resetAlgorithmPlayback);
randomArrayButton.addEventListener("click", () => {
    const count = 6 + Math.floor(Math.random() * 7);
    sortArrayInput.value = Array.from(
        { length: count },
        () => Math.floor(Math.random() * 41) - 20
    ).join(", ");
    resetAlgorithmPlayback();
});

addVertexForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = newVertexName.value.trim();
    if (!/^[A-Za-z0-9_-]{1,8}$/.test(name)) {
        setAlgorithmStatus("Tên đỉnh dùng 1–8 ký tự chữ, số, gạch ngang hoặc gạch dưới.", true);
        return;
    }
    if (visualizerGraph.vertices.length >= 16) {
        setAlgorithmStatus("Đồ thị tối đa 16 đỉnh để mô phỏng rõ ràng.", true);
        return;
    }
    if (visualizerGraph.vertices.includes(name)) {
        setAlgorithmStatus(`Đỉnh ${name} đã tồn tại.`, true);
        return;
    }
    visualizerGraph.vertices.push(name);
    newVertexName.value = "";
    setGraphVertexOptions();
    renderGraphEdges();
    resetAlgorithmPlayback();
    newVertexName.focus();
});

removeVertexButton.addEventListener("click", () => {
    const vertex = removeVertexSelect.value;
    if (!vertex) return;
    visualizerGraph.vertices = visualizerGraph.vertices.filter((item) => item !== vertex);
    visualizerGraph.edges = visualizerGraph.edges.filter(
        (edge) => edge.from !== vertex && edge.to !== vertex
    );
    setGraphVertexOptions();
    renderGraphEdges();
    resetAlgorithmPlayback();
});

addEdgeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const from = edgeFrom.value;
    const to = edgeTo.value;
    const weight = Number(edgeWeight.value);
    if (!from || !to) {
        setAlgorithmStatus("Cần có ít nhất hai đỉnh để tạo cạnh.", true);
        return;
    }
    if (from === to) {
        setAlgorithmStatus("Không thể tạo cạnh nối một đỉnh với chính nó.", true);
        return;
    }
    if (!Number.isInteger(weight) || weight < 0 || weight > 999) {
        setAlgorithmStatus("Trọng số cạnh phải là số nguyên không âm từ 0 đến 999.", true);
        return;
    }
    const duplicate = visualizerGraph.edges.some((edge) =>
        edge.from === from && edge.to === to ||
        edgeUndirected.checked && edge.undirected &&
            edge.from === to && edge.to === from
    );
    if (duplicate) {
        setAlgorithmStatus("Cạnh này đã có trong đồ thị.", true);
        return;
    }
    visualizerGraph.edges.push({
        from,
        to,
        weight,
        undirected: edgeUndirected.checked,
    });
    renderGraphEdges();
    resetAlgorithmPlayback();
});

algorithmStart.addEventListener("click", async () => {
    if (algorithmIsPlaying || algorithmIsPreparing) return;
    try {
        if (!algorithmFrames.length || algorithmFrameIndex >= algorithmFrames.length - 1) {
            await prepareAlgorithmRun();
        }
        algorithmIsPlaying = true;
        updateAlgorithmControls();
        scheduleAlgorithmStep();
    } catch (error) {
        pauseAlgorithmPlayback();
        setAlgorithmStatus(
            `Không thể bắt đầu mô phỏng: ${error instanceof Error ? error.message : String(error)}`,
            true
        );
    }
});

algorithmPause.addEventListener("click", pauseAlgorithmPlayback);
algorithmNext.addEventListener("click", stepAlgorithmForward);
algorithmPrevious.addEventListener("click", () => {
    pauseAlgorithmPlayback();
    if (algorithmFrameIndex > 0) {
        algorithmFrameIndex--;
        renderAlgorithmFrame();
    }
});
algorithmReset.addEventListener("click", resetAlgorithmPlayback);

setGraphVertexOptions();
renderGraphEdges();
updateAlgorithmMode();

const pomodoroModes = {
    focus: { name: "Tập trung", minutes: 25, phase: "TẬP TRUNG" },
    shortBreak: { name: "Nghỉ ngắn", minutes: 5, phase: "NGHỈ NGẮN" },
    longBreak: { name: "Nghỉ dài", minutes: 15, phase: "NGHỈ DÀI" },
};
let timerState = {
    mode: "focus",
    remaining: pomodoroModes.focus.minutes * 60,
    endsAt: null,
    running: false,
};
let timerInterval = null;

function persistTimer() {
    try {
        localStorage.setItem(storageKeys.pomodoro, JSON.stringify(timerState));
        timerStatus.classList.remove("status-error");
        return true;
    } catch (error) {
        setStorageStatus(timerStatus, `Không thể lưu bộ đếm: ${error.message}`, true);
        return false;
    }
}

function renderTimer() {
    const mode = pomodoroModes[timerState.mode];
    const remaining = Math.max(0, Math.ceil(timerState.remaining));
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    timerRing.style.setProperty(
        "--timer-progress",
        `${Math.min(100, remaining / (mode.minutes * 60) * 100)}%`
    );
    timerMode.textContent = `${mode.name} · ${mode.minutes} phút`;
    timerPhaseLabel.textContent = timerState.running
        ? mode.phase
        : remaining === 0 ? "HOÀN THÀNH" : "SẴN SÀNG";
    timerPresetButtons.forEach((button) => {
        const selected = button.dataset.timerMode === timerState.mode;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    timerStart.disabled = timerState.running || remaining === 0;
    timerPause.disabled = !timerState.running;
}

function finishTimer() {
    if (timerInterval !== null) {
        window.clearInterval(timerInterval);
        timerInterval = null;
    }
    timerState.remaining = 0;
    timerState.endsAt = null;
    timerState.running = false;
    renderTimer();
    timerStatus.textContent = "Phiên đã kết thúc. Hãy nghỉ ngơi một chút!";
    persistTimer();
}

function tickTimer() {
    if (!timerState.running || timerState.endsAt === null) return;
    const previousRemaining = timerState.remaining;
    timerState.remaining = Math.max(0, Math.ceil(
        (timerState.endsAt - Date.now()) / 1000
    ));
    if (timerState.remaining === 0) {
        finishTimer();
        return;
    }
    renderTimer();
    if (timerState.remaining !== previousRemaining) {
        persistTimer();
    }
}

function loadTimer() {
    try {
        const stored = localStorage.getItem(storageKeys.pomodoro);
        if (stored !== null) {
            const saved = JSON.parse(stored);
            if (
                saved && pomodoroModes[saved.mode] &&
                Number.isFinite(saved.remaining) && saved.remaining >= 0 &&
                saved.remaining <= pomodoroModes[saved.mode].minutes * 60 &&
                (saved.endsAt === null || Number.isFinite(saved.endsAt)) &&
                typeof saved.running === "boolean" &&
                (!saved.running || Number.isFinite(saved.endsAt))
            ) {
                const expired = saved.running && saved.endsAt <= Date.now();
                timerState = {
                    mode: saved.mode,
                    remaining: expired ? 0 : saved.remaining,
                    endsAt: saved.endsAt,
                    running: saved.running && !expired,
                };
                if (timerState.running) {
                    timerState.remaining = Math.ceil(
                        (timerState.endsAt - Date.now()) / 1000
                    );
                } else {
                    timerState.endsAt = null;
                }
                if (expired) {
                    timerStatus.textContent = "Phiên đã kết thúc trong lúc bạn vắng mặt.";
                }
            } else {
                throw new Error("Dữ liệu bộ đếm không đúng định dạng.");
            }
        }
    } catch (error) {
        timerState = {
            mode: "focus",
            remaining: pomodoroModes.focus.minutes * 60,
            endsAt: null,
            running: false,
        };
        setStorageStatus(
            timerStatus,
            `Không thể đọc bộ đếm đã lưu: ${error.message}`,
            true
        );
    }
    renderTimer();
    if (timerState.running) {
        timerStatus.textContent = "Đang tiếp tục phiên đã lưu.";
        timerInterval = window.setInterval(tickTimer, 250);
        tickTimer();
    }
}

timerPresetButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (timerInterval !== null) {
            window.clearInterval(timerInterval);
            timerInterval = null;
        }
        const mode = button.dataset.timerMode;
        if (!pomodoroModes[mode]) return;
        timerState = {
            mode,
            remaining: pomodoroModes[mode].minutes * 60,
            endsAt: null,
            running: false,
        };
        timerStatus.textContent = "Đã đổi chế độ.";
        renderTimer();
        persistTimer();
    });
});

timerStart.addEventListener("click", () => {
    if (timerState.running || timerState.remaining <= 0) return;
    timerState.running = true;
    timerState.endsAt = Date.now() + timerState.remaining * 1000;
    timerStatus.textContent = `Đang ${pomodoroModes[timerState.mode].name.toLocaleLowerCase("vi")}...`;
    renderTimer();
    persistTimer();
    timerInterval = window.setInterval(tickTimer, 250);
});

timerPause.addEventListener("click", () => {
    if (!timerState.running) return;
    tickTimer();
    if (timerState.running) {
        timerState.running = false;
        timerState.endsAt = null;
        if (timerInterval !== null) {
            window.clearInterval(timerInterval);
            timerInterval = null;
        }
        timerStatus.textContent = "Đã tạm dừng.";
        renderTimer();
        persistTimer();
    }
});

timerReset.addEventListener("click", () => {
    if (timerInterval !== null) {
        window.clearInterval(timerInterval);
        timerInterval = null;
    }
    timerState = {
        mode: timerState.mode,
        remaining: pomodoroModes[timerState.mode].minutes * 60,
        endsAt: null,
        running: false,
    };
    timerStatus.textContent = "Đã đặt lại. Sẵn sàng bắt đầu.";
    renderTimer();
    persistTimer();
});

loadTimer();

function saveTodos(todos) {
    todosState = todos;
    try {
        localStorage.setItem(storageKeys.todos, JSON.stringify(todos));
        setStorageStatus(todoStatus, "Đã lưu trên thiết bị này.");
        return true;
    } catch (error) {
        setStorageStatus(todoStatus, `Không thể lưu công việc: ${error.message}`, true);
        return false;
    }
}

function createTodoElement(todo, animate = false) {
    const item = document.createElement("li");
    item.className = `todo-item${animate ? " todo-item-enter" : ""}`;
    item.dataset.todoId = todo.id;
    const label = document.createElement("label");
    label.className = "todo-label";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `Đánh dấu hoàn thành: ${todo.text}`);
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        text.classList.toggle("todo-completed", todo.completed);
        updateTodoSummary();
        saveTodos(todosState);
    });
    const text = document.createElement("span");
    text.textContent = todo.text;
    text.classList.toggle("todo-completed", todo.completed);
    label.append(checkbox, text);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "todo-remove";
    remove.textContent = "Xóa";
    remove.setAttribute("aria-label", `Xóa công việc: ${todo.text}`);
    remove.addEventListener("click", () => {
        removeTodo(todo.id);
    });
    item.append(label, remove);
    return item;
}

function updateTodoSummary() {
    const completedCount = todosState.filter((todo) => todo.completed).length;
    todoCount.textContent = `${completedCount}/${todosState.length}`;
    todoEmpty.hidden = todosState.length !== 0;
    clearCompletedTodos.disabled = completedCount === 0;
}

function renderTodos(todos) {
    todoList.replaceChildren();
    todos.forEach((todo) => todoList.append(createTodoElement(todo)));
    updateTodoSummary();
}

function removeTodo(id) {
    const item = [...todoList.children].find((entry) =>
        entry.dataset.todoId === id
    );
    todosState = todosState.filter((todo) => todo.id !== id);
    if (item) {
        item.classList.add("todo-item-exit");
        const removeAfterAnimation = () => item.remove();
        item.addEventListener("transitionend", removeAfterAnimation, { once: true });
        window.setTimeout(removeAfterAnimation, 350);
    }
    updateTodoSummary();
    saveTodos(todosState);
}

function loadTodos() {
    try {
        const stored = localStorage.getItem(storageKeys.todos);
        if (stored === null) {
            renderTodos([]);
            return;
        }
        const todos = JSON.parse(stored);
        if (!Array.isArray(todos) || !todos.every((todo) =>
            todo && typeof todo.id === "string" &&
            typeof todo.text === "string" &&
            typeof todo.completed === "boolean"
        )) {
            throw new Error("Dữ liệu danh sách công việc không đúng định dạng.");
        }
        todosState = todos;
        renderTodos(todos);
    } catch (error) {
        todosState = [];
        renderTodos([]);
        setStorageStatus(todoStatus, `Không thể đọc công việc đã lưu: ${error.message}`, true);
    }
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;

    const todo = {
        id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`,
        text,
        completed: false,
    };
    todosState.push(todo);
    todoList.append(createTodoElement(todo, true));
    updateTodoSummary();
    if (saveTodos(todosState)) {
        todoInput.value = "";
        todoInput.focus();
    }
});

clearCompletedTodos.addEventListener("click", () => {
    const completed = todosState.filter((todo) => todo.completed);
    completed.forEach((todo) => removeTodo(todo.id));
});

function loadNotes() {
    try {
        const stored = localStorage.getItem(storageKeys.notes);
        if (stored !== null) notesInput.value = stored;
    } catch (error) {
        setStorageStatus(notesStatus, `Không thể đọc ghi chú đã lưu: ${error.message}`, true);
    }
}

notesInput.addEventListener("input", () => {
    try {
        localStorage.setItem(storageKeys.notes, notesInput.value);
        setStorageStatus(notesStatus, "Đã lưu");
        notesStatus.classList.add("notes-saved");
        window.clearTimeout(notesSaveTimeout);
        notesSaveTimeout = window.setTimeout(
            () => notesStatus.classList.remove("notes-saved"),
            1800
        );
    } catch (error) {
        setStorageStatus(notesStatus, `Không thể lưu ghi chú: ${error.message}`, true);
    }
});

copyNotes.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(notesInput.value);
        setStorageStatus(notesStatus, "Đã sao chép");
        notesStatus.classList.add("notes-saved");
    } catch (error) {
        setStorageStatus(notesStatus, `Không thể sao chép ghi chú: ${error.message}`, true);
    }
});

let examEvent = null;
let examInterval = null;

function renderExamCountdown() {
    if (!examEvent) {
        examEventCard.hidden = true;
        return;
    }

    const deadline = new Date(examEvent.date).getTime();
    const remaining = Math.max(0, deadline - Date.now());
    const seconds = Math.floor(remaining / 1000);
    document.getElementById("examEventTitle").textContent = examEvent.name;
    document.getElementById("examEventDate").textContent = new Date(
        examEvent.date
    ).toLocaleString("vi-VN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    document.getElementById("examDays").textContent =
        String(Math.floor(seconds / 86400)).padStart(2, "0");
    document.getElementById("examHours").textContent =
        String(Math.floor(seconds / 3600) % 24).padStart(2, "0");
    document.getElementById("examMinutes").textContent =
        String(Math.floor(seconds / 60) % 60).padStart(2, "0");
    document.getElementById("examSeconds").textContent =
        String(seconds % 60).padStart(2, "0");
    document.getElementById("examCountdownStatus").textContent =
        remaining === 0 ? "Sự kiện đã bắt đầu." : "Mỗi giây là một bước gần hơn.";
    examEventCard.hidden = false;
}

function loadExamEvent() {
    try {
        const stored = localStorage.getItem(storageKeys.exam);
        if (stored === null) return;
        const saved = JSON.parse(stored);
        if (
            !saved || typeof saved.name !== "string" || !saved.name.trim() ||
            typeof saved.date !== "string" ||
            !Number.isFinite(new Date(saved.date).getTime())
        ) {
            throw new Error("Lịch trình kỳ thi không đúng định dạng.");
        }
        examEvent = { name: saved.name, date: saved.date };
        examName.value = examEvent.name;
        const localDate = new Date(examEvent.date);
        examDate.value = new Date(
            localDate.getTime() - localDate.getTimezoneOffset() * 60000
        ).toISOString().slice(0, 16);
        renderExamCountdown();
    } catch (error) {
        setStorageStatus(examStatus, `Không thể đọc lịch trình đã lưu: ${error.message}`, true);
    }
}

examForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const date = new Date(examDate.value);
    const name = examName.value.trim();
    if (!name || !Number.isFinite(date.getTime())) {
        setStorageStatus(examStatus, "Nhập tên sự kiện và ngày giờ hợp lệ.", true);
        return;
    }
    examEvent = { name, date: date.toISOString() };
    try {
        localStorage.setItem(storageKeys.exam, JSON.stringify(examEvent));
        setStorageStatus(examStatus, "Lịch trình đã lưu trên thiết bị này.");
        renderExamCountdown();
        if (examInterval === null) {
            examInterval = window.setInterval(renderExamCountdown, 1000);
        }
    } catch (error) {
        setStorageStatus(examStatus, `Không thể lưu lịch trình: ${error.message}`, true);
    }
});

document.getElementById("deleteExam").addEventListener("click", () => {
    try {
        localStorage.removeItem(storageKeys.exam);
        examEvent = null;
        if (examInterval !== null) {
            window.clearInterval(examInterval);
            examInterval = null;
        }
        examForm.reset();
        renderExamCountdown();
        setStorageStatus(examStatus, "Đã xóa lịch trình.");
    } catch (error) {
        setStorageStatus(examStatus, `Không thể xóa lịch trình: ${error.message}`, true);
    }
});

loadExamEvent();
if (examEvent) {
    examInterval = window.setInterval(renderExamCountdown, 1000);
}

const studyDayNames = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];
let studyWeekStart = getMonday(new Date());
let studyHours = {};

function getMonday(date) {
    const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
    const daysSinceMonday = (monday.getDay() + 6) % 7;
    monday.setDate(monday.getDate() - daysSinceMonday);
    return monday;
}

function shiftDate(date, days) {
    const shifted = new Date(date);
    shifted.setDate(shifted.getDate() + days);
    return shifted;
}

function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function studyWeekDates() {
    return studyDayNames.map((_, index) => shiftDate(studyWeekStart, index));
}

function persistStudyHours() {
    try {
        localStorage.setItem(storageKeys.study, JSON.stringify(studyHours));
        studyStatus.classList.remove("status-error");
        studyStatus.textContent = "Giờ học đã được lưu tự động.";
        return true;
    } catch (error) {
        setStorageStatus(studyStatus, `Không thể lưu giờ học: ${error.message}`, true);
        return false;
    }
}

function renderStudyWeek() {
    const dates = studyWeekDates();
    const end = dates[6];
    studyWeekLabel.textContent = `${dates[0].toLocaleDateString("vi-VN", {
        day: "numeric",
        month: "short",
    })} – ${end.toLocaleDateString("vi-VN", { day: "numeric", month: "short" })}`;
    studyWeekChart.replaceChildren();
    studyHourInputs.replaceChildren();
    let total = 0;

    dates.forEach((date, index) => {
        const key = dateKey(date);
        const hours = studyHours[key] || 0;
        total += hours;

        const dayColumn = document.createElement("div");
        dayColumn.className = "study-day-column";
        const value = document.createElement("span");
        value.className = "study-bar-value";
        value.textContent = `${hours}h`;
        const track = document.createElement("div");
        track.className = "study-bar-track";
        const bar = document.createElement("div");
        bar.className = "study-bar";
        bar.style.height = `${Math.min(100, hours / 12 * 100)}%`;
        track.append(bar);
        const label = document.createElement("span");
        label.className = "study-bar-label";
        label.textContent = studyDayNames[index];
        dayColumn.append(value, track, label);
        studyWeekChart.append(dayColumn);

        const inputGroup = document.createElement("label");
        inputGroup.className = "study-hour-row";
        const inputLabel = document.createElement("span");
        inputLabel.textContent = `${studyDayNames[index]} · ${date.toLocaleDateString("vi-VN", {
            day: "numeric",
            month: "short",
        })}`;
        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "24";
        input.step = "0.25";
        input.value = String(hours);
        input.dataset.studyDate = key;
        input.setAttribute("aria-label", `Số giờ học ${studyDayNames[index]}`);
        const unit = document.createElement("span");
        unit.textContent = "giờ";
        inputGroup.append(inputLabel, input, unit);
        studyHourInputs.append(inputGroup);
    });

    studyWeekTotal.textContent =
        `Tổng tuần này · ${Number(total.toFixed(2))} giờ`;
}

function loadStudyHours() {
    try {
        const stored = localStorage.getItem(storageKeys.study);
        if (stored !== null) {
            const saved = JSON.parse(stored);
            if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
                throw new Error("Dữ liệu giờ học không đúng định dạng.");
            }
            Object.entries(saved).forEach(([date, hours]) => {
                if (
                    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
                    !Number.isFinite(hours) || hours < 0 || hours > 24
                ) {
                    throw new Error("Số giờ học phải nằm trong khoảng 0 đến 24.");
                }
            });
            studyHours = saved;
        }
    } catch (error) {
        setStorageStatus(studyStatus, `Không thể đọc giờ học đã lưu: ${error.message}`, true);
    }
    renderStudyWeek();
}

studyHourInputs.addEventListener("input", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.dataset.studyDate) return;
    const hours = input.value === "" ? 0 : Number(input.value);
    if (!Number.isFinite(hours) || hours < 0 || hours > 24) {
        setStorageStatus(studyStatus, "Số giờ học mỗi ngày phải từ 0 đến 24.", true);
        return;
    }
    studyHours[input.dataset.studyDate] = hours;
    persistStudyHours();

    const index = studyWeekDates().findIndex((date) =>
        dateKey(date) === input.dataset.studyDate
    );
    const column = studyWeekChart.children[index];
    column.querySelector(".study-bar-value").textContent = `${hours}h`;
    column.querySelector(".study-bar").style.height =
        `${Math.min(100, hours / 12 * 100)}%`;
    const total = studyWeekDates().reduce(
        (sum, date) => sum + (studyHours[dateKey(date)] || 0),
        0
    );
    studyWeekTotal.textContent =
        `Tổng tuần này · ${Number(total.toFixed(2))} giờ`;
});

function changeStudyWeek(amount) {
    studyWeekStart = shiftDate(studyWeekStart, amount * 7);
    renderStudyWeek();
}

document.getElementById("previousStudyWeek").addEventListener("click", () => {
    changeStudyWeek(-1);
});
document.getElementById("nextStudyWeek").addEventListener("click", () => {
    changeStudyWeek(1);
});

loadStudyHours();

const timetableDays = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];
const timetablePeriods = 8;
let timetable = {};

function timetableKey(day, period) {
    return `${day}-${period}`;
}

function renderTimetable() {
    timetableGrid.replaceChildren();
    const corner = document.createElement("div");
    corner.className = "timetable-corner";
    corner.setAttribute("aria-hidden", "true");
    timetableGrid.append(corner);

    timetableDays.forEach((day) => {
        const heading = document.createElement("div");
        heading.className = "timetable-day-heading";
        heading.textContent = day;
        timetableGrid.append(heading);
    });

    for (let period = 0; period < timetablePeriods; period++) {
        const label = document.createElement("div");
        label.className = "timetable-period";
        label.textContent = `Tiết ${period + 1}`;
        timetableGrid.append(label);
        timetableDays.forEach((day, dayIndex) => {
            const key = timetableKey(dayIndex, period);
            const lesson = timetable[key];
            const cell = document.createElement("button");
            cell.type = "button";
            cell.className = `timetable-cell${lesson ? " timetable-cell-filled" : ""}`;
            cell.dataset.day = String(dayIndex);
            cell.dataset.period = String(period);
            cell.setAttribute(
                "aria-label",
                `${day}, tiết ${period + 1}${lesson ? `: ${lesson.subject}, ${lesson.room || "chưa có phòng"}` : ": trống"}`
            );
            if (lesson) {
                const subject = document.createElement("span");
                subject.className = "timetable-subject";
                subject.textContent = lesson.subject;
                const room = document.createElement("span");
                room.className = "timetable-room";
                room.textContent = lesson.room || "Chưa có phòng";
                cell.append(subject, room);
            } else {
                cell.textContent = "+";
            }
            timetableGrid.append(cell);
        });
    }
}

function persistTimetable() {
    try {
        localStorage.setItem(storageKeys.timetable, JSON.stringify(timetable));
        setStorageStatus(timetableStatus, "Thời khóa biểu đã lưu trên thiết bị này.");
        return true;
    } catch (error) {
        setStorageStatus(timetableStatus, `Không thể lưu thời khóa biểu: ${error.message}`, true);
        return false;
    }
}

function loadTimetable() {
    try {
        const stored = localStorage.getItem(storageKeys.timetable);
        if (stored !== null) {
            const saved = JSON.parse(stored);
            if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
                throw new Error("Dữ liệu thời khóa biểu không đúng định dạng.");
            }
            Object.entries(saved).forEach(([key, lesson]) => {
                if (
                    !/^[0-6]-[0-7]$/.test(key) || !lesson ||
                    typeof lesson.subject !== "string" ||
                    typeof lesson.room !== "string"
                ) {
                    throw new Error("Có tiết học đã lưu không đúng định dạng.");
                }
            });
            timetable = saved;
        }
    } catch (error) {
        setStorageStatus(timetableStatus, `Không thể đọc thời khóa biểu: ${error.message}`, true);
    }
    renderTimetable();
}

timetableGrid.addEventListener("click", (event) => {
    const cell = event.target.closest(".timetable-cell");
    if (!cell) return;
    selectedClassSlot = {
        day: Number(cell.dataset.day),
        period: Number(cell.dataset.period),
    };
    const key = timetableKey(selectedClassSlot.day, selectedClassSlot.period);
    const lesson = timetable[key];
    document.getElementById("classFormTitle").textContent =
        lesson ? "Chỉnh sửa tiết học" : "Thêm tiết học";
    document.getElementById("classFormSlot").textContent =
        `${timetableDays[selectedClassSlot.day]} · Tiết ${selectedClassSlot.period + 1}`;
    classSubject.value = lesson?.subject || "";
    classRoom.value = lesson?.room || "";
    document.getElementById("deleteClass").hidden = !lesson;
    classForm.hidden = false;
    classSubject.focus();
});

classForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!selectedClassSlot) return;
    const subject = classSubject.value.trim();
    if (!subject) {
        setStorageStatus(timetableStatus, "Nhập tên môn học trước khi lưu.", true);
        classSubject.focus();
        return;
    }
    timetable[timetableKey(selectedClassSlot.day, selectedClassSlot.period)] = {
        subject,
        room: classRoom.value.trim(),
    };
    if (persistTimetable()) {
        renderTimetable();
        classForm.hidden = true;
        selectedClassSlot = null;
    }
});

document.getElementById("deleteClass").addEventListener("click", () => {
    if (!selectedClassSlot) return;
    delete timetable[timetableKey(selectedClassSlot.day, selectedClassSlot.period)];
    if (persistTimetable()) {
        renderTimetable();
        classForm.hidden = true;
        selectedClassSlot = null;
    }
});

document.getElementById("cancelClass").addEventListener("click", () => {
    classForm.hidden = true;
    selectedClassSlot = null;
});

loadTimetable();

const currencyFormatter = new Intl.NumberFormat("vi-VN", {
    maximumFractionDigits: 0,
});

function formatCurrency(amount) {
    return `${currencyFormatter.format(amount)} ₫`;
}

function updateBillSplit() {
    const amount = Number(billAmount.value);
    const people = Number(billPeople.value);
    const tipPercent = Number(billTip.value);
    billStatus.textContent = "";
    billStatus.classList.remove("status-error");

    if (billAmount.value === "" || !Number.isFinite(amount) || amount <= 0) {
        billPerPerson.textContent = "—";
        billBreakdown.textContent = "Nhập hóa đơn để xem kết quả chia tiền.";
        return;
    }
    if (
        !Number.isInteger(people) || people < 1 || people > 1000 ||
        !Number.isFinite(tipPercent) || tipPercent < 0 || tipPercent > 1000
    ) {
        billPerPerson.textContent = "—";
        billBreakdown.textContent = "Kiểm tra lại số người và phần trăm tip.";
        return;
    }

    const baseAmount = Math.round(amount);
    const totalAmount = Math.round(amount * (1 + tipPercent / 100));
    if (!Number.isSafeInteger(totalAmount)) {
        billPerPerson.textContent = "—";
        setStorageStatus(billStatus, "Tổng hóa đơn vượt quá giới hạn tính toán an toàn.", true);
        return;
    }

    const baseShare = Math.floor(totalAmount / people);
    const remainder = totalAmount % people;
    billPerPerson.textContent = formatCurrency(baseShare + (remainder ? 1 : 0));
    const tipAmount = totalAmount - baseAmount;
    const splitDetails = remainder
        ? `${remainder} người trả ${formatCurrency(baseShare + 1)}, ${people - remainder} người trả ${formatCurrency(baseShare)}.`
        : `${people} người trả bằng nhau.`;
    billBreakdown.textContent =
        `Tổng ${formatCurrency(totalAmount)} · Tip ${formatCurrency(tipAmount)}. ${splitDetails}`;
}

[billAmount, billPeople, billTip].forEach((input) => {
    input.addEventListener("input", updateBillSplit);
});

document.getElementById("billForm").addEventListener("submit", (event) => {
    event.preventDefault();
    updateBillSplit();
});

loadTodos();
loadNotes();

function closeToolDialog() {
    if (toolDialog.open) {
        toolDialog.close();
    }
}

closeDialog.addEventListener("click", closeToolDialog);
dialogOk.addEventListener("click", closeToolDialog);

toolDialog.addEventListener("click", (event) => {
    if (event.target === toolDialog) {
        closeToolDialog();
    }
});

toolDialog.addEventListener("close", () => {
    pauseAlgorithmPlayback();
    stopAssetAnimation();
});

function loadQrLibrary() {
    if (typeof window.qrcode === "function") {
        return Promise.resolve(window.qrcode);
    }
    if (qrLibraryPromise) {
        return qrLibraryPromise;
    }

    const script = document.createElement("script");
    script.src = qrLibraryUrl;
    script.integrity =
        "sha384-mZT2gIty7ZDdOGkxfP6joZcYdMW1Jvj9dRlfpTmaJAKKXTqzygtB22k7FLe+KZC1";
    script.crossOrigin = "anonymous";

    const loading = new Promise((resolve, reject) => {
        script.addEventListener("load", () => {
            if (typeof window.qrcode === "function") {
                resolve(window.qrcode);
                return;
            }
            reject(new Error("Thư viện QR không khởi tạo đúng cách."));
        }, { once: true });
        script.addEventListener("error", () => {
            reject(new Error("Không tải được thư viện QR. Hãy kiểm tra kết nối mạng rồi thử lại."));
        }, { once: true });
        document.head.append(script);
    });

    qrLibraryPromise = loading.catch((error) => {
        script.remove();
        qrLibraryPromise = null;
        throw error;
    });
    return qrLibraryPromise;
}

function escapeVcardValue(value) {
    return value
        .trim()
        .replace(/\\/g, "\\\\")
        .replace(/\r?\n/g, "\\n")
        .replace(/([,;])/g, "\\$1");
}

function validateQrEmail(value) {
    return /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(value);
}

function normalizeQrPhone(value) {
    const phone = value.trim();
    if (!/^\+?[0-9][0-9\s().-]{4,24}$/.test(phone)) {
        throw new Error("Nhập số điện thoại hợp lệ, có thể gồm dấu +, khoảng trắng, ngoặc hoặc gạch ngang.");
    }
    return phone.replace(/[^\d+]/g, "");
}

function getQrPayload() {
    const type = qrContentType.value;
    if (type === "vcard") {
        const name = qrContactName.value.trim();
        if (!name) {
            throw new Error("Hãy nhập họ tên để tạo vCard.");
        }
        const phone = qrContactPhone.value.trim();
        const email = qrContactEmail.value.trim();
        const organization = qrContactOrganization.value.trim();
        const lines = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `FN:${escapeVcardValue(name)}`,
        ];
        if (phone) {
            lines.push(`TEL;TYPE=CELL:${normalizeQrPhone(phone)}`);
        }
        if (email) {
            if (!validateQrEmail(email)) {
                throw new Error("Địa chỉ email trong vCard chưa hợp lệ.");
            }
            lines.push(`EMAIL:${escapeVcardValue(email)}`);
        }
        if (organization) {
            lines.push(`ORG:${escapeVcardValue(organization)}`);
        }
        lines.push("END:VCARD");
        return lines.join("\r\n");
    }

    const value = qrContent.value.trim();
    if (!value) {
        throw new Error("Hãy nhập nội dung cần tạo mã QR.");
    }
    if (type === "url") {
        let url;
        try {
            url = new URL(value);
        } catch {
            throw new Error("Địa chỉ URL chưa hợp lệ.");
        }
        if (url.protocol !== "http:" && url.protocol !== "https:") {
            throw new Error("URL cần bắt đầu bằng http:// hoặc https://.");
        }
        return url.href;
    }
    if (type === "email") {
        if (!validateQrEmail(value)) {
            throw new Error("Địa chỉ email chưa hợp lệ.");
        }
        return `mailto:${value}`;
    }
    if (type === "phone") {
        return `tel:${normalizeQrPhone(value)}`;
    }
    return value;
}

function qrColorLuminance(color) {
    const channels = color.slice(1).match(/.{2}/g).map((channel) => {
        const value = parseInt(channel, 16) / 255;
        return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    });
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function makeQrSvg(matrix, size, margin, moduleSize, foreground, background) {
    const count = matrix.getModuleCount();
    const offset = Math.floor((size - count * moduleSize) / 2);
    const commands = [];
    for (let row = 0; row < count; row += 1) {
        for (let column = 0; column < count; column += 1) {
            if (matrix.isDark(row, column)) {
                const x = offset + column * moduleSize;
                const y = offset + row * moduleSize;
                commands.push(`M${x} ${y}h${moduleSize}v${moduleSize}h-${moduleSize}z`);
            }
        }
    }
    const quietZone = margin * moduleSize;
    const backgroundRect = `<path fill="${background}" d="M0 0h${size}v${size}H0z"/>`;
    const foregroundPath =
        `<path fill="${foreground}" shape-rendering="crispEdges" d="${commands.join("")}"/>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="Mã QR">${backgroundRect}${foregroundPath}<metadata>Quiet zone: ${quietZone}px</metadata></svg>`;
}

function clearQrPreview() {
    qrPreviewCanvas.hidden = true;
    qrPreviewPlaceholder.hidden = false;
    qrPreviewCanvas.width = 0;
    qrPreviewCanvas.height = 0;
    qrSvgMarkup = "";
    [qrCopyButton, qrPngButton, qrSvgButton].forEach((button) => {
        button.disabled = true;
    });
}

function updateQrWarnings(moduleSize, size, margin, foreground, background) {
    const warnings = [];
    const contrast = (() => {
        const luminances = [qrColorLuminance(foreground), qrColorLuminance(background)]
            .sort((a, b) => b - a);
        return (luminances[0] + 0.05) / (luminances[1] + 0.05);
    })();
    if (contrast < 4.5) {
        warnings.push("Độ tương phản màu thấp; hãy chọn màu mã tối và màu nền sáng hơn để dễ quét.");
    }
    if (moduleSize < 3 || size < 180) {
        warnings.push("Mã QR nhỏ hoặc ô mã quá mảnh; hãy tăng kích thước lên ít nhất 240 px để dễ quét.");
    }
    if (margin < 2) {
        warnings.push("Lề trống nhỏ hơn 2 module có thể khiến máy quét khó nhận diện mã.");
    }
    qrWarning.textContent = warnings.join(" ");
    qrWarning.hidden = warnings.length === 0;
}

async function updateQrPreview() {
    const request = ++qrRenderRequest;
    clearQrPreview();
    qrWarning.hidden = true;
    qrWarning.textContent = "";
    const contentType = qrContentType.value;
    qrPlainFields.hidden = contentType === "vcard";
    qrVcardFields.hidden = contentType !== "vcard";

    const contentHints = {
        url: ["Địa chỉ URL", "https://example.com", "Nhập địa chỉ bắt đầu bằng http:// hoặc https://."],
        text: ["Văn bản", "Nhập văn bản cần mã hóa", "Có thể nhập tiếng Việt; nội dung được mã hóa trong trình duyệt."],
        email: ["Địa chỉ email", "an@example.com", "Tạo liên kết mailto: từ một địa chỉ email hợp lệ."],
        phone: ["Số điện thoại", "+84 912 345 678", "Tạo liên kết gọi điện; có thể nhập dấu +, khoảng trắng hoặc gạch ngang."],
    };
    if (contentHints[contentType]) {
        [qrContentLabel.textContent, qrContent.placeholder, qrInputHint.textContent] =
            contentHints[contentType];
    }

    try {
        const payload = getQrPayload();
        const size = Number(qrSize.value);
        const margin = Number(qrMargin.value);
        if (!Number.isInteger(size) || size < 128 || size > 1024) {
            throw new Error("Kích thước phải là số nguyên từ 128 đến 1024 px.");
        }
        if (!Number.isInteger(margin) || margin < 0 || margin > 16) {
            throw new Error("Lề phải là số nguyên từ 0 đến 16 module.");
        }
        if (!/^#[\da-f]{6}$/i.test(qrForeground.value) ||
            !/^#[\da-f]{6}$/i.test(qrBackground.value)) {
            throw new Error("Hãy chọn màu mã và màu nền hợp lệ.");
        }

        qrStatus.classList.remove("status-error");
        qrStatus.textContent = "Đang tạo mã QR...";
        const qrFactory = await loadQrLibrary();
        if (request !== qrRenderRequest) {
            return;
        }

        const utf8Data = Array.from(new TextEncoder().encode(payload),
            (byte) => String.fromCharCode(byte)).join("");
        const matrix = qrFactory(0, "M");
        matrix.addData(utf8Data, "Byte");
        matrix.make();

        const count = matrix.getModuleCount();
        const moduleSize = Math.floor(size / (count + margin * 2));
        if (moduleSize < 1) {
            throw new Error("Nội dung quá dài so với kích thước đã chọn. Hãy tăng kích thước hoặc rút gọn nội dung.");
        }
        const canvas = qrPreviewCanvas;
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d");
        context.fillStyle = qrBackground.value;
        context.fillRect(0, 0, size, size);
        context.fillStyle = qrForeground.value;
        const offset = Math.floor((size - count * moduleSize) / 2);
        for (let row = 0; row < count; row += 1) {
            for (let column = 0; column < count; column += 1) {
                if (matrix.isDark(row, column)) {
                    context.fillRect(
                        offset + column * moduleSize,
                        offset + row * moduleSize,
                        moduleSize,
                        moduleSize
                    );
                }
            }
        }
        qrSvgMarkup = makeQrSvg(
            matrix,
            size,
            margin,
            moduleSize,
            qrForeground.value,
            qrBackground.value
        );
        qrPreviewCanvas.hidden = false;
        qrPreviewPlaceholder.hidden = true;
        qrPreviewCanvas.setAttribute(
            "aria-label",
            `Mã QR đã tạo cho ${contentType === "vcard" ? "thông tin liên hệ" : contentType}`
        );
        [qrCopyButton, qrPngButton, qrSvgButton].forEach((button) => {
            button.disabled = false;
        });
        updateQrWarnings(moduleSize, size, margin, qrForeground.value, qrBackground.value);
        qrStatus.classList.remove("status-error");
        qrStatus.textContent = `Đã tạo mã QR ${size} × ${size} px.`;
    } catch (error) {
        if (request !== qrRenderRequest) {
            return;
        }
        qrStatus.textContent = error.message;
        qrStatus.classList.toggle(
            "status-error",
            !error.message.startsWith("Hãy nhập nội dung") &&
            !error.message.startsWith("Hãy nhập họ tên")
        );
    }
}

function downloadQrBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function createQrPngBlob() {
    const base64 = qrPreviewCanvas.toDataURL("image/png").split(",")[1];
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    return new Blob([bytes], { type: "image/png" });
}

function downloadQrPng() {
    const link = document.createElement("a");
    link.href = qrPreviewCanvas.toDataURL("image/png");
    link.download = "qr-code.png";
    document.body.append(link);
    link.click();
    link.remove();
}

[qrContent, qrContactName, qrContactPhone, qrContactEmail, qrContactOrganization,
    qrForeground, qrBackground, qrSize, qrMargin].forEach((input) => {
    input.addEventListener("input", updateQrPreview);
});
qrContentType.addEventListener("change", updateQrPreview);

qrPngButton.addEventListener("click", () => {
    try {
        downloadQrPng();
    } catch (error) {
        setStorageStatus(qrStatus, `Không thể tạo tệp PNG: ${error.message}`, true);
    }
});

qrSvgButton.addEventListener("click", () => {
    if (!qrSvgMarkup) {
        return;
    }
    downloadQrBlob(
        new Blob([qrSvgMarkup], { type: "image/svg+xml;charset=utf-8" }),
        "qr-code.svg"
    );
});

qrCopyButton.addEventListener("click", async () => {
    if (!qrPreviewCanvas.width) {
        return;
    }
    if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") {
        setStorageStatus(
            qrStatus,
            "Trình duyệt không hỗ trợ sao chép ảnh QR; hãy tải PNG để sử dụng.",
            true
        );
        return;
    }
    try {
        const blob = createQrPngBlob();
        await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob }),
        ]);
        setStorageStatus(qrStatus, "Đã sao chép ảnh QR vào clipboard.");
    } catch (error) {
        setStorageStatus(qrStatus, `Không thể sao chép ảnh QR: ${error.message}`, true);
    }
});

const maxAssetFileBytes = 20 * 1024 * 1024;
const maxAssetPixels = 32_000_000;
const maxAssetFrames = 600;

function setAssetStatus(element, message, isError = false) {
    element.textContent = message;
    element.classList.toggle("status-error", isError);
}

function validateAssetImageFile(file) {
    if (
        !file ||
        (file.type && !["image/png", "image/jpeg", "image/webp"].includes(file.type)) ||
        !/\.(png|jpe?g|webp)$/i.test(file.name)
    ) {
        throw new Error("Chỉ hỗ trợ ảnh PNG, JPEG hoặc WebP.");
    }
    if (file.size > maxAssetFileBytes) {
        throw new Error("Mỗi ảnh cần nhỏ hơn hoặc bằng 20 MB.");
    }
}

function getAssetPixelCount() {
    return assetFrames.reduce(
        (total, frame) => total + frame.canvas.width * frame.canvas.height,
        assetSheetCanvas
            ? assetSheetCanvas.width * assetSheetCanvas.height
            : 0
    );
}

async function loadAssetBitmap(file) {
    validateAssetImageFile(file);
    const bitmap = await createImageBitmap(file);
    if (
        bitmap.width < 1 ||
        bitmap.height < 1 ||
        bitmap.width * bitmap.height > maxAssetPixels
    ) {
        bitmap.close();
        throw new Error("Ảnh vượt quá giới hạn 32 megapixel.");
    }
    return bitmap;
}

function canvasToPng(canvas) {
    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (!blob) {
                reject(new Error("Không thể mã hóa frame thành PNG."));
                return;
            }
            resolve(blob);
        }, "image/png");
    });
}

function cleanAssetName(name) {
    return name
        .replace(/\.[^.]+$/, "")
        .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "-")
        .trim()
        .slice(0, 80) || "asset";
}

function normalizeAssetFolder(folder) {
    const normalized = folder
        .replace(/\\/g, "/")
        .split("/")
        .map((part) => part.trim())
        .filter(Boolean);
    if (
        normalized.length > 5 ||
        normalized.some((part) =>
            part === "." ||
            part === ".." ||
            /[<>:"|?*\u0000-\u001f]/.test(part) ||
            part.length > 40
        )
    ) {
        throw new Error("Tên thư mục không hợp lệ (tối đa 5 cấp, mỗi cấp 40 ký tự).");
    }
    return normalized.join("/");
}

function registerAssetFolder(folder) {
    let current = "";
    folder.split("/").filter(Boolean).forEach((part) => {
        current = current ? `${current}/${part}` : part;
        assetFolders.add(current);
    });
}

function assetFolderOptions(selectedFolder = "") {
    return [
        ["", "Gốc"],
        ...[...assetFolders].filter(Boolean).sort((a, b) => a.localeCompare(b))
            .map((folder) => [folder, folder]),
    ].map(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        option.selected = value === selectedFolder;
        return option;
    });
}

function refreshAssetFolderControls() {
    const previousSheetFolder = assetSheetFolder.value;
    const previousExportFolder = assetFolderControlsInitialized
        ? assetExportFolder.value
        : "*";
    assetSheetFolder.replaceChildren(...assetFolderOptions(previousSheetFolder));
    assetExportFolder.replaceChildren();
    const allOption = document.createElement("option");
    allOption.value = "*";
    allOption.textContent = "Tất cả thư mục";
    assetExportFolder.append(allOption, ...assetFolderOptions());
    assetExportFolder.value = previousExportFolder === "*" ||
        [...assetFolders].includes(previousExportFolder)
        ? previousExportFolder
        : "*";
    assetFolderControlsInitialized = true;
}

function makeAssetCanvas(width, height, source, sx, sy, sw, sh) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) {
        throw new Error("Trình duyệt không thể khởi tạo Canvas 2D.");
    }
    context.drawImage(source, sx, sy, sw, sh, 0, 0, width, height);
    return canvas;
}

function addAssetFrame({ name, canvas, folder = "", selected = true }) {
    const frame = {
        id: assetNextId,
        name: `${cleanAssetName(name)}-${String(assetNextId).padStart(3, "0")}`,
        canvas,
        folder,
        selected,
    };
    assetNextId += 1;
    assetFrames.push(frame);
    return frame;
}

async function acceptAssetSheet(file) {
    let bitmap;
    try {
        bitmap = await loadAssetBitmap(file);
        const existingFramesPixels = assetFrames.reduce(
            (total, frame) => total + frame.canvas.width * frame.canvas.height,
            0
        );
        if (existingFramesPixels + bitmap.width * bitmap.height > maxAssetPixels) {
            throw new Error("Sprite sheet và các frame hiện có vượt giới hạn 32 megapixel tổng.");
        }
        assetSheetCanvas = makeAssetCanvas(
            bitmap.width,
            bitmap.height,
            bitmap,
            0,
            0,
            bitmap.width,
            bitmap.height
        );
        assetSheetName = cleanAssetName(file.name);
        assetSheetInfo.textContent =
            `${file.name} · ${bitmap.width} × ${bitmap.height} px · ${(file.size / 1024 / 1024).toFixed(2)} MB`;
        assetSliceButton.disabled = false;
        setAssetStatus(assetSliceStatus, "Ảnh đã tải. Chọn cách chia rồi cắt frame.");
    } catch (error) {
        assetSheetCanvas = null;
        assetSheetInfo.textContent = "Chưa chọn ảnh.";
        assetSliceButton.disabled = true;
        setAssetStatus(assetSliceStatus, error.message, true);
    } finally {
        bitmap?.close();
    }
}

function sliceAssetSheet() {
    if (!assetSheetCanvas) {
        setAssetStatus(assetSliceStatus, "Hãy tải sprite sheet trước.", true);
        return;
    }
    const rows = Number(assetRows.value);
    const columns = Number(assetCols.value);
    let frameWidth;
    let frameHeight;
    if (assetSliceMode.value === "grid") {
        if (
            !Number.isInteger(rows) || rows < 1 || rows > 200 ||
            !Number.isInteger(columns) || columns < 1 || columns > 200
        ) {
            setAssetStatus(assetSliceStatus, "Hàng và cột cần là số nguyên từ 1 đến 200.", true);
            return;
        }
        if (assetSheetCanvas.width % columns || assetSheetCanvas.height % rows) {
            setAssetStatus(
                assetSliceStatus,
                "Kích thước ảnh cần chia hết cho số cột và số hàng để không cắt lệch frame.",
                true
            );
            return;
        }
        frameWidth = assetSheetCanvas.width / columns;
        frameHeight = assetSheetCanvas.height / rows;
    } else {
        frameWidth = Number(assetFrameWidth.value);
        frameHeight = Number(assetFrameHeight.value);
        if (
            !Number.isInteger(frameWidth) || frameWidth < 1 ||
            !Number.isInteger(frameHeight) || frameHeight < 1
        ) {
            setAssetStatus(assetSliceStatus, "Kích thước frame cần là số nguyên dương.", true);
            return;
        }
        if (
            assetSheetCanvas.width % frameWidth ||
            assetSheetCanvas.height % frameHeight
        ) {
            setAssetStatus(
                assetSliceStatus,
                "Kích thước frame cần chia hết cho kích thước sprite sheet.",
                true
            );
            return;
        }
    }

    const frameColumns = assetSheetCanvas.width / frameWidth;
    const frameRows = assetSheetCanvas.height / frameHeight;
    const frameTotal = frameColumns * frameRows;
    if (
        frameTotal > maxAssetFrames ||
        assetFrames.length + frameTotal > maxAssetFrames
    ) {
        setAssetStatus(
            assetSliceStatus,
            `Giới hạn ${maxAssetFrames} asset trong một phiên; lần cắt này có ${frameTotal} frame.`,
            true
        );
        return;
    }

    try {
        const folder = assetSheetFolder.value;
        const additions = [];
        for (let row = 0; row < frameRows; row += 1) {
            for (let column = 0; column < frameColumns; column += 1) {
                additions.push({
                    name: `${assetSheetName}-r${String(row + 1).padStart(2, "0")}-c${String(column + 1).padStart(2, "0")}`,
                    canvas: makeAssetCanvas(
                        frameWidth,
                        frameHeight,
                        assetSheetCanvas,
                        column * frameWidth,
                        row * frameHeight,
                        frameWidth,
                        frameHeight
                    ),
                    folder,
                });
            }
        }
        assetFrames.push(...additions.map((frame) => ({
            id: assetNextId++,
            ...frame,
            selected: true,
        })));
        registerAssetFolder(folder);
        renderAssetWorkspace();
        setAssetStatus(assetSliceStatus, `Đã cắt ${frameTotal} frame (${frameWidth} × ${frameHeight} px).`);
    } catch (error) {
        setAssetStatus(assetSliceStatus, error.message, true);
    }
}

function renderAssetFrameGrid() {
    assetFrameGrid.replaceChildren();
    assetFrameCount.textContent =
        `${assetFrames.length} frame · ${assetFrames.filter((frame) => frame.selected).length} đang chọn`;
    assetSelectAllButton.disabled = assetFrames.length === 0;
    assetSelectAllButton.textContent =
        assetFrames.length && assetFrames.every((frame) => frame.selected)
            ? "Bỏ chọn tất cả"
            : "Chọn tất cả";

    for (const frame of assetFrames) {
        const card = document.createElement("article");
        card.className = "asset-frame-card";
        const thumbnailStage = document.createElement("div");
        thumbnailStage.className = "asset-thumbnail-stage";
        const thumbnail = document.createElement("canvas");
        thumbnail.width = 96;
        thumbnail.height = 72;
        const scale = Math.min(68 / frame.canvas.width, 60 / frame.canvas.height);
        const width = Math.max(1, Math.round(frame.canvas.width * scale));
        const height = Math.max(1, Math.round(frame.canvas.height * scale));
        thumbnail.getContext("2d").drawImage(
            frame.canvas,
            0,
            0,
            frame.canvas.width,
            frame.canvas.height,
            (96 - width) / 2,
            (72 - height) / 2,
            width,
            height
        );
        thumbnailStage.append(thumbnail);

        const selector = document.createElement("label");
        selector.className = "asset-frame-selector";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = frame.selected;
        checkbox.dataset.assetSelect = String(frame.id);
        checkbox.setAttribute("aria-label", `Chọn ${frame.name}`);
        const name = document.createElement("span");
        name.textContent = frame.name;
        selector.append(checkbox, name);

        const folder = document.createElement("select");
        folder.className = "asset-frame-folder";
        folder.dataset.assetFolder = String(frame.id);
        folder.setAttribute("aria-label", `Thư mục của ${frame.name}`);
        folder.append(...assetFolderOptions(frame.folder));

        const download = document.createElement("button");
        download.className = "secondary-button asset-download-frame";
        download.type = "button";
        download.dataset.assetDownload = String(frame.id);
        download.textContent = "Tải PNG";
        card.append(thumbnailStage, selector, folder, download);
        assetFrameGrid.append(card);
    }
}

function getSelectedAssetFrames() {
    return assetFrames.filter((frame) => frame.selected);
}

function drawAnimationFrame(frame) {
    const context = assetAnimationCanvas.getContext("2d");
    context.clearRect(0, 0, assetAnimationCanvas.width, assetAnimationCanvas.height);
    const limit = Math.min(assetAnimationCanvas.width, assetAnimationCanvas.height) - 28;
    const scale = Math.min(limit / frame.canvas.width, limit / frame.canvas.height);
    const width = Math.max(1, frame.canvas.width * scale);
    const height = Math.max(1, frame.canvas.height * scale);
    context.imageSmoothingEnabled = scale > 1;
    context.imageSmoothingQuality = "high";
    context.drawImage(
        frame.canvas,
        (assetAnimationCanvas.width - width) / 2,
        (assetAnimationCanvas.height - height) / 2,
        width,
        height
    );
    assetAnimationCanvas.setAttribute("aria-label", `Frame ${frame.name}`);
    assetAnimationCanvas.hidden = false;
    assetAnimationPlaceholder.hidden = true;
}

function stopAssetAnimation(reset = true) {
    assetAnimationPlaying = false;
    if (assetAnimationFrameId) {
        cancelAnimationFrame(assetAnimationFrameId);
        assetAnimationFrameId = 0;
    }
    assetAnimationLastTime = 0;
    assetAnimationAccumulator = 0;
    assetPlayButton.disabled = getSelectedAssetFrames().length === 0;
    assetPauseButton.disabled = true;
    assetStopButton.disabled = true;
    if (reset) {
        assetAnimationIndex = 0;
        assetLastDrawnIndex = -1;
        const first = getSelectedAssetFrames()[0];
        if (first) {
            drawAnimationFrame(first);
        } else {
            assetAnimationCanvas.hidden = true;
            assetAnimationPlaceholder.hidden = false;
        }
    }
}

function updateAssetAnimation(time) {
    if (!assetAnimationPlaying) {
        return;
    }
    const frames = getSelectedAssetFrames();
    if (!frames.length) {
        stopAssetAnimation();
        setAssetStatus(assetAnimationStatus, "Hãy chọn ít nhất một frame để phát.", true);
        return;
    }
    if (!assetAnimationLastTime) {
        assetAnimationLastTime = time;
    }
    assetAnimationAccumulator += Math.min(time - assetAnimationLastTime, 250);
    assetAnimationLastTime = time;
    const interval = 1000 / Number(assetFps.value);
    let redraw = false;
    while (assetAnimationAccumulator >= interval) {
        assetAnimationAccumulator -= interval;
        assetAnimationIndex += 1;
        if (assetAnimationIndex >= frames.length) {
            if (!assetLoop.checked) {
                assetAnimationIndex = frames.length - 1;
                drawAnimationFrame(frames[assetAnimationIndex]);
                stopAssetAnimation(false);
                assetAnimationIndex = 0;
                assetLastDrawnIndex = -1;
                setAssetStatus(assetAnimationStatus, "Animation đã phát hết.");
                return;
            }
            assetAnimationIndex = 0;
        }
        redraw = true;
    }
    if (redraw || assetLastDrawnIndex !== assetAnimationIndex) {
        drawAnimationFrame(frames[assetAnimationIndex]);
        assetLastDrawnIndex = assetAnimationIndex;
    }
    assetAnimationFrameId = requestAnimationFrame(updateAssetAnimation);
}

function updateAssetAnimationControls() {
    const selected = getSelectedAssetFrames();
    if (!selected.length) {
        stopAssetAnimation();
        setAssetStatus(assetAnimationStatus, "Chưa có frame được chọn.");
    } else {
        assetPlayButton.disabled = assetAnimationPlaying;
        if (!assetAnimationPlaying) {
            assetPlayButton.disabled = false;
            assetPauseButton.disabled = true;
            assetStopButton.disabled = true;
        }
        if (assetLastDrawnIndex < 0 || assetAnimationIndex >= selected.length) {
            assetAnimationIndex = 0;
            assetLastDrawnIndex = -1;
        }
        if (!assetAnimationPlaying && assetLastDrawnIndex < 0) {
            drawAnimationFrame(selected[assetAnimationIndex]);
        }
        setAssetStatus(assetAnimationStatus, `${selected.length} frame sẵn sàng cho animation.`);
    }
    assetResizeButton.disabled = selected.length === 0;
    assetBackgroundButton.disabled =
        selected.length === 0 || assetBackgroundMode.value === "off";
    assetExportSelectedButton.disabled = selected.length === 0;
}

function renderAssetFolderTree() {
    assetFolderTree.replaceChildren();
    const folders = ["", ...[...assetFolders].filter(Boolean)
        .sort((a, b) => a.localeCompare(b))];
    folders.forEach((folder) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "asset-folder-item";
        button.classList.toggle("active", folder === assetFolderFilter);
        button.style.setProperty("--folder-depth", folder ? folder.split("/").length : 0);
        button.dataset.assetFolderFilter = folder;
        const count = assetFrames.filter((frame) => frame.folder === folder).length;
        button.textContent = `${folder || "Tất cả asset"} (${folder ? count : assetFrames.length})`;
        assetFolderTree.append(button);
    });
}

function renderAssetLibraryList() {
    assetLibraryList.replaceChildren();
    const visible = assetFolderFilter
        ? assetFrames.filter((frame) => frame.folder === assetFolderFilter)
        : assetFrames;
    if (!visible.length) {
        const empty = document.createElement("p");
        empty.className = "asset-muted";
        empty.textContent = assetFrames.length
            ? "Thư mục này chưa có asset."
            : "Chưa có asset. Tải và cắt một sprite sheet hoặc thêm ảnh vào thư viện.";
        assetLibraryList.append(empty);
        return;
    }
    visible.forEach((frame) => {
        const row = document.createElement("div");
        row.className = "asset-library-row";
        const canvas = document.createElement("canvas");
        canvas.width = 48;
        canvas.height = 48;
        const scale = Math.min(40 / frame.canvas.width, 40 / frame.canvas.height);
        const width = Math.max(1, frame.canvas.width * scale);
        const height = Math.max(1, frame.canvas.height * scale);
        canvas.getContext("2d").drawImage(
            frame.canvas,
            0,
            0,
            frame.canvas.width,
            frame.canvas.height,
            (48 - width) / 2,
            (48 - height) / 2,
            width,
            height
        );
        const details = document.createElement("span");
        details.className = "asset-library-details";
        const title = document.createElement("strong");
        title.textContent = frame.name;
        const metadata = document.createElement("small");
        metadata.textContent =
            `${frame.canvas.width} × ${frame.canvas.height} · ${frame.folder || "Gốc"}`;
        details.append(title, metadata);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = frame.selected;
        checkbox.dataset.assetSelect = String(frame.id);
        checkbox.setAttribute("aria-label", `Chọn ${frame.name}`);
        row.append(canvas, details, checkbox);
        assetLibraryList.append(row);
    });
}

function renderAssetWorkspace() {
    refreshAssetFolderControls();
    renderAssetFrameGrid();
    renderAssetFolderTree();
    renderAssetLibraryList();
    updateAssetAnimationControls();
    assetExportZipButton.disabled = assetFrames.length === 0;
}

async function addAssetFiles(files, folder = "") {
    const imageFiles = [...files].filter((file) =>
        /\.(png|jpe?g|webp)$/i.test(file.name)
    );
    if (!imageFiles.length) {
        throw new Error("Không tìm thấy ảnh PNG, JPEG hoặc WebP trong dữ liệu được thả.");
    }
    if (assetFrames.length + imageFiles.length > maxAssetFrames) {
        throw new Error(`Giới hạn ${maxAssetFrames} asset trong một phiên.`);
    }
    const additions = [];
    for (const file of imageFiles) {
        let bitmap;
        try {
            bitmap = await loadAssetBitmap(file);
            const currentPixels = getAssetPixelCount() +
                additions.reduce((sum, frame) =>
                    sum + frame.canvas.width * frame.canvas.height, 0);
            if (currentPixels + bitmap.width * bitmap.height > maxAssetPixels) {
                throw new Error("Các asset hiện có vượt giới hạn 32 megapixel tổng.");
            }
            additions.push({
                name: cleanAssetName(file.name),
                canvas: makeAssetCanvas(
                    bitmap.width,
                    bitmap.height,
                    bitmap,
                    0,
                    0,
                    bitmap.width,
                    bitmap.height
                ),
                folder,
            });
        } finally {
            bitmap?.close();
        }
    }
    assetFrames.push(...additions.map((frame) => ({
        id: assetNextId++,
        ...frame,
        selected: true,
    })));
    registerAssetFolder(folder);
    renderAssetWorkspace();
    return additions.length;
}

function resizeSelectedAssets() {
    const frames = getSelectedAssetFrames();
    if (!frames.length) {
        setAssetStatus(assetProcessingStatus, "Hãy chọn ít nhất một frame.", true);
        return;
    }
    const widthValue = Number(assetResizeWidth.value);
    const heightValue = Number(assetResizeHeight.value);
    const percent = Number(assetResizePercent.value);
    if (
        assetResizeMode.value === "percent" &&
        (!Number.isFinite(percent) || percent < 1 || percent > 800)
    ) {
        setAssetStatus(assetProcessingStatus, "Tỷ lệ cần nằm trong khoảng 1–800%.", true);
        return;
    }
    if (
        assetResizeMode.value === "pixels" &&
        (!Number.isInteger(widthValue) || widthValue < 1 || widthValue > 4096 ||
            !Number.isInteger(heightValue) || heightValue < 1 || heightValue > 4096)
    ) {
        setAssetStatus(assetProcessingStatus, "Chiều rộng và chiều cao cần nằm trong khoảng 1–4096 px.", true);
        return;
    }
    let totalPixels = assetSheetCanvas
        ? assetSheetCanvas.width * assetSheetCanvas.height
        : 0;
    const sizes = frames.map((frame) => {
        const width = assetResizeMode.value === "percent"
            ? Math.max(1, Math.round(frame.canvas.width * percent / 100))
            : widthValue;
        const height = assetResizeMode.value === "percent"
            ? Math.max(1, Math.round(frame.canvas.height * percent / 100))
            : heightValue;
        totalPixels += width * height;
        return { width, height };
    });
    const selectedIds = new Set(frames.map((frame) => frame.id));
    totalPixels += assetFrames.reduce((total, frame) =>
        selectedIds.has(frame.id)
            ? total
            : total + frame.canvas.width * frame.canvas.height,
    0);
    if (sizes.some(({ width, height }) => width > 4096 || height > 4096) ||
        totalPixels > maxAssetPixels) {
        setAssetStatus(
            assetProcessingStatus,
            "Kích thước kết quả vượt giới hạn 4096 px mỗi chiều hoặc 32 megapixel tổng.",
            true
        );
        return;
    }
    stopAssetAnimation();
    frames.forEach((frame, index) => {
        const { width, height } = sizes[index];
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.imageSmoothingEnabled = width > frame.canvas.width ||
            height > frame.canvas.height;
        context.imageSmoothingQuality = "high";
        context.drawImage(frame.canvas, 0, 0, width, height);
        frame.canvas = canvas;
    });
    renderAssetWorkspace();
    setAssetStatus(
        assetProcessingStatus,
        `Đã đổi kích thước ${frames.length} frame bằng Canvas.`
    );
}

function removeSelectedAssetBackground() {
    const frames = getSelectedAssetFrames();
    if (!frames.length || assetBackgroundMode.value === "off") {
        setAssetStatus(assetProcessingStatus, "Chọn frame và màu nền cần xóa trước.", true);
        return;
    }
    const selectedColor = assetBackgroundMode.value === "white"
        ? "#ffffff"
        : assetBackgroundMode.value === "black"
            ? "#000000"
            : assetBackgroundColor.value;
    const target = [
        parseInt(selectedColor.slice(1, 3), 16),
        parseInt(selectedColor.slice(3, 5), 16),
        parseInt(selectedColor.slice(5, 7), 16),
    ];
    const tolerance = Number(assetTolerance.value) * Math.sqrt(3);
    const maxPixels = Math.max(...frames.map((frame) =>
        frame.canvas.width * frame.canvas.height
    ));
    if (frames.reduce((sum, frame) =>
        sum + frame.canvas.width * frame.canvas.height, 0) > 16_000_000) {
        setAssetStatus(
            assetProcessingStatus,
            "Để tránh dùng quá nhiều bộ nhớ, xóa nền tối đa 16 megapixel mỗi lần.",
            true
        );
        return;
    }
    stopAssetAnimation();
    let removedPixels = 0;
    try {
        frames.forEach((frame) => {
            const context = frame.canvas.getContext("2d", { willReadFrequently: true });
            const image = context.getImageData(
                0,
                0,
                frame.canvas.width,
                frame.canvas.height
            );
            const pixels = image.data;
            for (let index = 0; index < pixels.length; index += 4) {
                if (pixels[index + 3] === 0) {
                    continue;
                }
                const distance = Math.hypot(
                    pixels[index] - target[0],
                    pixels[index + 1] - target[1],
                    pixels[index + 2] - target[2]
                );
                if (distance <= tolerance) {
                    pixels[index + 3] = 0;
                    removedPixels += 1;
                }
            }
            context.putImageData(image, 0, 0);
        });
    } catch (error) {
        setAssetStatus(assetProcessingStatus, `Không thể xóa nền: ${error.message}`, true);
        return;
    }
    renderAssetWorkspace();
    setAssetStatus(
        assetProcessingStatus,
        `Đã làm trong suốt ${removedPixels.toLocaleString("vi-VN")} pixel gần màu ${selectedColor} (tối đa ${maxPixels.toLocaleString("vi-VN")} px/frame).`
    );
}

function getAnimationPhases(description, count) {
    const text = description.toLocaleLowerCase("vi");
    let phases;
    if (/chém|kiếm|đánh|tấn công|attack|slash|swing/.test(text)) {
        phases = ["Chuẩn bị tư thế", "Lấy đà", "Vung vũ khí", "Điểm va chạm", "Theo đà", "Trở về tư thế"];
    } else if (/lửa|cháy|bùng|fire|flame|explosion|nổ/.test(text)) {
        phases = ["Tàn lửa ban đầu", "Nhen nhóm", "Bùng lên", "Đỉnh năng lượng", "Co lại", "Tàn dần"];
    } else if (/nhảy|jump|leap/.test(text)) {
        phases = ["Nén lực", "Rời mặt đất", "Bay lên", "Đỉnh cú nhảy", "Rơi xuống", "Tiếp đất"];
    } else if (/chạy|đi bộ|walk|run/.test(text)) {
        phases = ["Chân chạm đất", "Chuyển trọng tâm", "Nhấc chân", "Bước tới", "Chân chạm đất", "Lặp chu kỳ"];
    } else if (/idle|đứng|thở|chờ/.test(text)) {
        phases = ["Tư thế nghỉ", "Hít vào", "Nâng nhẹ thân", "Thở ra", "Hạ thân", "Trở về nghỉ"];
    } else {
        phases = ["Tư thế gốc", "Bắt đầu chuyển động", "Tăng biên độ", "Điểm chuyển động lớn nhất", "Giảm biên độ", "Trở về tư thế"];
    }
    return Array.from({ length: count }, (_, index) => phases[
        Math.round(index * (phases.length - 1) / Math.max(1, count - 1))
    ]);
}

function renderAssetSuggestions() {
    const description = assetAnimationPrompt.value.trim();
    if (!description) {
        setAssetStatus(assetManagerStatus, "Hãy mô tả hoạt ảnh để tạo storyboard.", true);
        return;
    }
    assetSuggestions.replaceChildren();
    const source = getSelectedAssetFrames()[0] || assetFrames[0];
    if (!source) {
        const note = document.createElement("p");
        note.className = "asset-muted";
        note.textContent = "Thêm hoặc cắt ít nhất một frame để xem storyboard có bản xem trước hình ảnh.";
        assetSuggestions.append(note);
    }
    const count = Number(assetPromptFrameCount.value);
    const phases = getAnimationPhases(description, count);
    phases.forEach((phase, index) => {
        const card = document.createElement("article");
        card.className = "asset-suggestion-card";
        const illustration = document.createElement("canvas");
        illustration.width = 80;
        illustration.height = 80;
        if (source) {
            const context = illustration.getContext("2d");
            const scale = Math.min(58 / source.canvas.width, 58 / source.canvas.height);
            const width = source.canvas.width * scale;
            const height = source.canvas.height * scale;
            const progress = index / Math.max(1, count - 1);
            context.save();
            context.translate(40, 40 + Math.sin(progress * Math.PI * 2) * 4);
            context.rotate((progress - 0.5) * 0.18);
            context.globalAlpha = 0.68 + Math.sin(progress * Math.PI) * 0.32;
            context.drawImage(source.canvas, -width / 2, -height / 2, width, height);
            context.restore();
        }
        const number = document.createElement("span");
        number.className = "asset-suggestion-number";
        number.textContent = String(index + 1).padStart(2, "0");
        const caption = document.createElement("strong");
        caption.textContent = phase;
        const timing = document.createElement("small");
        timing.textContent = `${Math.round(index * (1000 / Number(assetFps.value)))} ms`;
        card.append(illustration, number, caption, timing);
        assetSuggestions.append(card);
    });
    setAssetStatus(
        assetManagerStatus,
        `Đã tạo storyboard ${count} nhịp từ mô tả. Các bản vẽ là mô phỏng bố cục, không phải frame ảnh được sinh tự động.`
    );
}

const assetCrcTable = (() => {
    const table = new Uint32Array(256);
    for (let index = 0; index < table.length; index += 1) {
        let value = index;
        for (let bit = 0; bit < 8; bit += 1) {
            value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
        }
        table[index] = value >>> 0;
    }
    return table;
})();

function calculateAssetCrc32(bytes) {
    let crc = 0xffffffff;
    for (const byte of bytes) {
        crc = assetCrcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
}

function createZipHeader(size, filenameBytes, crc, offset = 0, local = false) {
    const header = new Uint8Array(local ? 30 + filenameBytes.length : 46 + filenameBytes.length);
    const view = new DataView(header.buffer);
    if (local) {
        view.setUint32(0, 0x04034b50, true);
        view.setUint16(4, 20, true);
        view.setUint16(6, 0x0800, true);
        view.setUint16(8, 0, true);
        view.setUint32(14, crc, true);
        view.setUint32(18, size, true);
        view.setUint32(22, size, true);
        view.setUint16(26, filenameBytes.length, true);
        header.set(filenameBytes, 30);
    } else {
        view.setUint32(0, 0x02014b50, true);
        view.setUint16(4, 20, true);
        view.setUint16(6, 20, true);
        view.setUint16(8, 0x0800, true);
        view.setUint16(10, 0, true);
        view.setUint32(16, crc, true);
        view.setUint32(20, size, true);
        view.setUint32(24, size, true);
        view.setUint16(28, filenameBytes.length, true);
        view.setUint32(42, offset, true);
        header.set(filenameBytes, 46);
    }
    return header;
}

async function makeAssetZip(frames) {
    if (!frames.length) {
        throw new Error("Không có asset để xuất.");
    }
    const entries = [];
    let outputSize = 22;
    for (const frame of frames) {
        const blob = await canvasToPng(frame.canvas);
        const bytes = new Uint8Array(await blob.arrayBuffer());
        const path = `${frame.folder ? `${frame.folder}/` : ""}${frame.name}.png`;
        const filenameBytes = new TextEncoder().encode(path);
        if (
            bytes.length > 0xffffffff ||
            filenameBytes.length > 0xffff ||
            outputSize + bytes.length + filenameBytes.length * 2 + 76 > 0xffffffff
        ) {
            throw new Error("ZIP vượt giới hạn kích thước định dạng.");
        }
        const crc = calculateAssetCrc32(bytes);
        const localHeader = createZipHeader(bytes.length, filenameBytes, crc, 0, true);
        const localOffset = outputSize - 22;
        outputSize += localHeader.length + bytes.length;
        entries.push({
            bytes,
            filenameBytes,
            crc,
            localHeader,
            localOffset,
        });
    }
    const centralEntries = entries.map((entry) => {
        const header = createZipHeader(
            entry.bytes.length,
            entry.filenameBytes,
            entry.crc,
            entry.localOffset
        );
        outputSize += header.length;
        return header;
    });
    const centralSize = centralEntries.reduce((size, header) => size + header.length, 0);
    const end = new Uint8Array(22);
    const endView = new DataView(end.buffer);
    endView.setUint32(0, 0x06054b50, true);
    endView.setUint16(8, entries.length, true);
    endView.setUint16(10, entries.length, true);
    endView.setUint32(12, centralSize, true);
    endView.setUint32(16, outputSize - centralSize - 22, true);
    return new Blob(
        entries.flatMap((entry) => [entry.localHeader, entry.bytes])
            .concat(centralEntries, [end]),
        { type: "application/zip" }
    );
}

function downloadAssetBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function selectedAssetExportFrames(selectedOnly) {
    if (selectedOnly) {
        return getSelectedAssetFrames();
    }
    const folder = assetExportFolder.value;
    if (folder === "*") {
        return assetFrames;
    }
    return assetFrames.filter((frame) =>
        frame.folder === folder || frame.folder.startsWith(`${folder}/`)
    );
}

async function exportAssetZip(selectedOnly) {
    const button = selectedOnly ? assetExportSelectedButton : assetExportZipButton;
    const frames = selectedAssetExportFrames(selectedOnly);
    button.disabled = true;
    setAssetStatus(assetManagerStatus, `Đang đóng gói ${frames.length} PNG vào ZIP...`);
    try {
        const archive = await makeAssetZip(frames);
        const folderName = selectedOnly
            ? "selected-assets"
            : assetExportFolder.value === "*"
                ? "game-assets"
                : assetExportFolder.value.replace(/\//g, "-") || "root-assets";
        downloadAssetBlob(archive, `${folderName}.zip`);
        setAssetStatus(
            assetManagerStatus,
            `Đã tạo ${folderName}.zip (${frames.length} asset, ${(archive.size / 1024).toFixed(1)} KB).`
        );
    } catch (error) {
        setAssetStatus(assetManagerStatus, `Không thể xuất ZIP: ${error.message}`, true);
    } finally {
        button.disabled = frames.length === 0;
    }
}

function handleAssetDropzone(dropzone, callback) {
    ["dragenter", "dragover"].forEach((eventName) => {
        dropzone.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropzone.classList.add("drag-over");
        });
    });
    ["dragleave", "drop"].forEach((eventName) => {
        dropzone.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropzone.classList.remove("drag-over");
        });
    });
    dropzone.addEventListener("drop", async (event) => {
        try {
            await callback([...event.dataTransfer.files]);
        } catch (error) {
            const status = dropzone === assetSheetDropzone
                ? assetSliceStatus
                : assetManagerStatus;
            setAssetStatus(status, error.message, true);
        }
    });
}

assetSheetFile.addEventListener("change", () => {
    if (assetSheetFile.files[0]) {
        acceptAssetSheet(assetSheetFile.files[0]);
    }
});
handleAssetDropzone(assetSheetDropzone, async (files) => {
    if (!files[0]) {
        throw new Error("Thả một sprite sheet PNG, JPEG hoặc WebP.");
    }
    await acceptAssetSheet(files[0]);
});
assetSliceMode.addEventListener("change", () => {
    const gridMode = assetSliceMode.value === "grid";
    assetGridParameters.hidden = !gridMode;
    assetFrameParameters.hidden = gridMode;
});
assetSliceButton.addEventListener("click", sliceAssetSheet);

assetFrameGrid.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-asset-select]");
    if (checkbox) {
        const frame = assetFrames.find((item) => item.id === Number(checkbox.dataset.assetSelect));
        if (frame) {
            frame.selected = checkbox.checked;
            renderAssetWorkspace();
        }
        return;
    }
    const folderSelect = event.target.closest("[data-asset-folder]");
    if (folderSelect) {
        const frame = assetFrames.find((item) => item.id === Number(folderSelect.dataset.assetFolder));
        if (frame) {
            frame.folder = folderSelect.value;
            registerAssetFolder(frame.folder);
            renderAssetWorkspace();
        }
    }
});
assetFrameGrid.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-asset-download]");
    if (!button) {
        return;
    }
    const frame = assetFrames.find((item) => item.id === Number(button.dataset.assetDownload));
    if (!frame) {
        return;
    }
    try {
        downloadAssetBlob(await canvasToPng(frame.canvas), `${frame.name}.png`);
    } catch (error) {
        setAssetStatus(assetSliceStatus, `Không thể tải frame: ${error.message}`, true);
    }
});
assetSelectAllButton.addEventListener("click", () => {
    const select = !assetFrames.every((frame) => frame.selected);
    assetFrames.forEach((frame) => {
        frame.selected = select;
    });
    renderAssetWorkspace();
});
assetFps.addEventListener("input", () => {
    assetFpsValue.textContent = `${assetFps.value} FPS`;
});
assetPlayButton.addEventListener("click", () => {
    if (!getSelectedAssetFrames().length) {
        setAssetStatus(assetAnimationStatus, "Hãy chọn ít nhất một frame.", true);
        return;
    }
    if (assetAnimationIndex >= getSelectedAssetFrames().length) {
        assetAnimationIndex = 0;
    }
    assetAnimationPlaying = true;
    assetPlayButton.disabled = true;
    assetPauseButton.disabled = false;
    assetStopButton.disabled = false;
    setAssetStatus(assetAnimationStatus, `Đang phát ở ${assetFps.value} FPS.`);
    assetAnimationFrameId = requestAnimationFrame(updateAssetAnimation);
});
assetPauseButton.addEventListener("click", () => {
    assetAnimationPlaying = false;
    cancelAnimationFrame(assetAnimationFrameId);
    assetAnimationFrameId = 0;
    assetPlayButton.disabled = getSelectedAssetFrames().length === 0;
    assetPauseButton.disabled = true;
    assetStopButton.disabled = false;
    setAssetStatus(assetAnimationStatus, "Đã tạm dừng animation.");
});
assetStopButton.addEventListener("click", () => {
    stopAssetAnimation();
    setAssetStatus(assetAnimationStatus, "Animation đã dừng.");
});
assetResizeMode.addEventListener("change", () => {
    const percentMode = assetResizeMode.value === "percent";
    assetResizePercentControl.hidden = !percentMode;
    assetResizePixelControls.hidden = percentMode;
});
assetResizeButton.addEventListener("click", resizeSelectedAssets);
assetBackgroundMode.addEventListener("change", () => {
    assetBackgroundColorControl.hidden = assetBackgroundMode.value !== "custom";
    assetBackgroundButton.disabled =
        assetBackgroundMode.value === "off" || !getSelectedAssetFrames().length;
});
assetTolerance.addEventListener("input", () => {
    assetToleranceValue.textContent = assetTolerance.value;
});
assetBackgroundButton.addEventListener("click", removeSelectedAssetBackground);
assetSuggestButton.addEventListener("click", renderAssetSuggestions);

assetLibraryFiles.addEventListener("change", async () => {
    if (!assetLibraryFiles.files.length) {
        return;
    }
    try {
        const count = await addAssetFiles(assetLibraryFiles.files);
        setAssetStatus(assetManagerStatus, `Đã thêm ${count} asset vào thư viện.`);
    } catch (error) {
        setAssetStatus(assetManagerStatus, error.message, true);
    } finally {
        assetLibraryFiles.value = "";
    }
});
handleAssetDropzone(assetLibraryDropzone, async (files) => {
    const count = await addAssetFiles(files);
    setAssetStatus(assetManagerStatus, `Đã thêm ${count} asset vào thư viện.`);
});
assetFolderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
        const folder = normalizeAssetFolder(assetFolderName.value);
        if (!folder) {
            throw new Error("Nhập tên thư mục hoặc đường dẫn thư mục.");
        }
        registerAssetFolder(folder);
        assetFolderName.value = "";
        renderAssetWorkspace();
        assetSheetFolder.value = folder;
        setAssetStatus(assetManagerStatus, `Đã tạo thư mục ${folder}.`);
    } catch (error) {
        setAssetStatus(assetManagerStatus, error.message, true);
    }
});
assetFolderTree.addEventListener("click", (event) => {
    const button = event.target.closest("[data-asset-folder-filter]");
    if (!button) {
        return;
    }
    assetFolderFilter = button.dataset.assetFolderFilter;
    renderAssetFolderTree();
    renderAssetLibraryList();
});
assetLibraryList.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-asset-select]");
    if (!checkbox) {
        return;
    }
    const frame = assetFrames.find((item) => item.id === Number(checkbox.dataset.assetSelect));
    if (frame) {
        frame.selected = checkbox.checked;
        renderAssetWorkspace();
    }
});
assetExportZipButton.addEventListener("click", () => exportAssetZip(false));
assetExportSelectedButton.addEventListener("click", () => exportAssetZip(true));

refreshAssetFolderControls();
renderAssetWorkspace();

filterTools();
