"use strict";

document.documentElement.classList.add("js");
document.querySelector("#year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
menuButton.hidden = false;

function closeMenu(restoreFocus = false) {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  menuButton.querySelector("span").textContent = "+";
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
  menuButton.querySelector("span").textContent = open ? "−" : "+";
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") closeMenu(true);
});
matchMedia("(min-width: 768px)").addEventListener("change", () => closeMenu());

const gallery = document.querySelector("#domaines");
const categories = [...gallery.querySelectorAll(".domain-category")];
const categoryLinks = [...gallery.querySelectorAll(".domain-index a")];
const boardChoices = new Map();
const boardTabs = new Map();
const cutLabels = {
  "detail-fondation": "Fondation", "detail-mur": "Mur enterré",
  "detail-facade": "Baie ITE", "detail-toiture": "Toiture-terrasse",
  "detail-cloison": "Cloison", "detail-plafond": "Faux-plafond",
  "detail-sol": "Sol carrelé"
};
const picker = document.createElement("select");
picker.id = "category-picker";
picker.className = "category-picker";
picker.setAttribute("aria-label", "Choisir un domaine");
categoryLinks.forEach((link) => {
  const option = document.createElement("option");
  option.value = link.hash.slice(1);
  option.textContent = [...link.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join("").trim();
  picker.append(option);
});
gallery.querySelector(".gallery-layout").before(picker);

categories.forEach((category) => {
  const figures = [...category.querySelectorAll(".board-frame")];
  const tabs = [];
  if (figures.length > 1) {
    const list = document.createElement("div");
    list.className = "board-tabs";
    list.setAttribute("role", "tablist");
    list.setAttribute("aria-label", "Planches du domaine");
    figures.forEach((figure, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.id = `${figure.id}-tab`;
      button.textContent = index === 0 ? "Vue d’ensemble" : cutLabels[figure.id] || figure.querySelector("[data-title]").dataset.title;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", figure.id);
      figure.setAttribute("role", "tabpanel");
      figure.setAttribute("aria-labelledby", button.id);
      button.addEventListener("click", () => {
        activateCategory(category.id, figure.id);
        history.replaceState(null, "", `#${index === 0 ? category.id : figure.id}`);
      });
      button.addEventListener("keydown", (event) => {
        let next;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        tabs[next].click();
        tabs[next].focus();
      });
      tabs.push(button);
      list.append(button);
    });
    category.querySelector(".category-boards").before(list);
  }
  boardTabs.set(category.id, tabs);
});

function activateCategory(id, boardId) {
  const selected = categories.find((category) => category.id === id) || categories[0];
  categories.forEach((category) => { category.hidden = category !== selected; });
  categoryLinks.forEach((link) => {
    if (link.hash === `#${selected.id}`) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
  picker.value = selected.id;
  const figures = [...selected.querySelectorAll(".board-frame")];
  const requested = figures.find((figure) => figure.id === boardId);
  const active = requested || figures.find((figure) => figure.id === boardChoices.get(selected.id)) || figures[0];
  boardChoices.set(selected.id, active.id);
  figures.forEach((figure, index) => {
    figure.hidden = figure !== active;
    const tab = boardTabs.get(selected.id)[index];
    if (tab) {
      tab.setAttribute("aria-selected", String(figure === active));
      tab.tabIndex = figure === active ? 0 : -1;
    }
  });
}
function followGalleryHash(scroll = false) {
  const target = document.getElementById(location.hash.slice(1));
  const category = target?.closest(".domain-category");
  if (category) {
    activateCategory(category.id, target.closest(".board-frame")?.id);
    if (scroll) requestAnimationFrame(() => gallery.scrollIntoView({ block: "start" }));
  }
  if (target?.id === "panorama") target.open = true;
}
categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    activateCategory(link.hash.slice(1));
    history.pushState(null, "", link.hash);
  });
});
picker.addEventListener("change", () => {
  activateCategory(picker.value);
  history.pushState(null, "", `#${picker.value}`);
});
document.querySelector("#panorama").open = matchMedia("(min-width: 951px)").matches;
activateCategory(categories[0].id);
followGalleryHash(true);
window.addEventListener("hashchange", () => followGalleryHash(true));

const sectionLinks = [...navigation.querySelectorAll("a[href^='#']")];
const sections = sectionLinks.map((link) => document.querySelector(link.hash));
let navigationFrame = 0;
function updateCurrentSection() {
  navigationFrame = 0;
  let current = -1;
  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= 160) current = index;
  });
  sectionLinks.forEach((link, index) => {
    if (index === current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
window.addEventListener("scroll", () => {
  if (!navigationFrame) navigationFrame = requestAnimationFrame(updateCurrentSection);
}, { passive: true });
window.addEventListener("resize", updateCurrentSection);
updateCurrentSection();

const dialog = document.querySelector("#lightbox");
const boardImage = document.querySelector("#lightbox-image");
const viewport = document.querySelector("#lightbox-viewport");
const title = document.querySelector("#lightbox-title");
const fileLink = document.querySelector("#lightbox-file");
const zoomLevel = document.querySelector("#zoom-level");
const boardCount = document.querySelector("#board-count");
const zoomIn = document.querySelector("#zoom-in");
const zoomOut = document.querySelector("#zoom-out");
const fullscreenButton = document.querySelector("#lightbox-fullscreen");
const boardLinks = [...document.querySelectorAll(".board-link[data-board]")];
let readerBoards = boardLinks;
let activeIndex = 0;
let origin = null;
let scale = 1;
let fitMode = true;
let ownsFullscreen = false;

function setExpanded(expanded) {
  dialog.classList.toggle("is-fullscreen", expanded);
  fullscreenButton.setAttribute("aria-pressed", String(expanded));
  fullscreenButton.textContent = expanded ? "Réduire" : "Plein écran";
}
fullscreenButton.addEventListener("click", async () => {
  const expanded = !dialog.classList.contains("is-fullscreen");
  setExpanded(expanded);
  if (expanded && !document.fullscreenElement && document.documentElement.requestFullscreen) {
    try {
      await document.documentElement.requestFullscreen();
      ownsFullscreen = true;
    } catch { /* Le lecteur reste agrandi si le navigateur refuse le plein écran. */ }
  } else if (!expanded && ownsFullscreen && document.fullscreenElement) {
    ownsFullscreen = false;
    try { await document.exitFullscreen(); } catch { /* Aucun blocage du lecteur. */ }
  }
});
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && ownsFullscreen) {
    ownsFullscreen = false;
    setExpanded(false);
  }
});

function setScale(value, center = true) {
  if (!boardImage.naturalWidth) return;
  const centerX = (viewport.scrollLeft + viewport.clientWidth / 2) / (boardImage.naturalWidth * scale);
  const centerY = (viewport.scrollTop + viewport.clientHeight / 2) / (boardImage.naturalHeight * scale);
  const maximum = 3;
  scale = Math.min(maximum, Math.max(.1, value));
  dialog.style.setProperty("--image-width", `${Math.round(boardImage.naturalWidth * scale)}px`);
  zoomLevel.value = `${Math.round(scale * 100)} %`;
  zoomOut.disabled = scale <= .1;
  zoomIn.disabled = scale >= maximum;
  if (center) {
    viewport.scrollLeft = centerX * boardImage.naturalWidth * scale - viewport.clientWidth / 2;
    viewport.scrollTop = centerY * boardImage.naturalHeight * scale - viewport.clientHeight / 2;
  } else {
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  }
}
function fitImage() {
  if (!boardImage.naturalWidth || !dialog.open) return;
  fitMode = true;
  setScale(Math.min(1, (viewport.clientWidth - 24) / boardImage.naturalWidth, (viewport.clientHeight - 24) / boardImage.naturalHeight), false);
}
function showBoard(index) {
  activeIndex = (index + readerBoards.length) % readerBoards.length;
  const link = readerBoards[activeIndex];
  title.textContent = link.dataset.title;
  boardImage.alt = link.querySelector("img").alt;
  fileLink.href = link.href;
  boardCount.textContent = `${activeIndex + 1} / ${readerBoards.length}`;
  document.querySelector("#board-prev").disabled = readerBoards.length < 2;
  document.querySelector("#board-next").disabled = readerBoards.length < 2;
  fitMode = true;
  boardImage.src = link.href;
  if (boardImage.complete && boardImage.naturalWidth) fitImage();
}
boardImage.addEventListener("load", fitImage);
boardImage.addEventListener("error", () => {
  title.textContent = "La planche n’a pas pu être chargée. Utilisez « Ouvrir le fichier ».";
});
document.querySelectorAll("a[data-board]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== "function") return;
    event.preventDefault();
    origin = link;
    const category = link.closest(".domain-category");
    readerBoards = category ? [...category.querySelectorAll(".board-link[data-board]")] : [link];
    activeIndex = readerBoards.findIndex((board) => board.href === link.href);
    dialog.showModal();
    document.body.classList.add("modal-open");
    showBoard(activeIndex);
    document.querySelector("#lightbox-close").focus();
  });
});
document.querySelector("#lightbox-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  setExpanded(false);
  if (ownsFullscreen && document.fullscreenElement) {
    ownsFullscreen = false;
    document.exitFullscreen().catch(() => {});
  }
  if (origin) origin.focus({ preventScroll: true });
});
dialog.addEventListener("keydown", (event) => {
  if ((event.key === "ArrowLeft" || event.key === "ArrowRight") && event.target !== viewport && !event.ctrlKey && !event.altKey && !event.metaKey) {
    event.preventDefault();
    showBoard(activeIndex + (event.key === "ArrowLeft" ? -1 : 1));
  }
  if (event.key !== "Tab") return;
  const focusable = [...dialog.querySelectorAll("button:not(:disabled), a[href], [tabindex='0']")].filter((element) => !element.hidden);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
zoomIn.addEventListener("click", () => { fitMode = false; setScale(scale + .25); });
zoomOut.addEventListener("click", () => { fitMode = false; setScale(scale - .25); });
document.querySelector("#zoom-fit").addEventListener("click", fitImage);
document.querySelector("#zoom-actual").addEventListener("click", () => { fitMode = false; setScale(1); });
document.querySelector("#board-prev").addEventListener("click", () => showBoard(activeIndex - 1));
document.querySelector("#board-next").addEventListener("click", () => showBoard(activeIndex + 1));
new ResizeObserver(() => { if (fitMode) fitImage(); }).observe(viewport);
