
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

toolCards.forEach((card) => {
    card.addEventListener("click", () => {
        dialogTitle.textContent = card.dataset.name;
        dialogDescription.textContent =
            card.querySelector(".tool-description").textContent;

        toolDialog.showModal();
    });
});

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

filterTools();
