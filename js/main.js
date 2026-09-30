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

const dialog = document.querySelector("#lightbox");
const boardImage = document.querySelector("#lightbox-image");
const viewport = document.querySelector("#lightbox-viewport");
const title = document.querySelector("#lightbox-title");
const fileLink = document.querySelector("#lightbox-file");
const zoomLevel = document.querySelector("#zoom-level");
const boardCount = document.querySelector("#board-count");
const zoomIn = document.querySelector("#zoom-in");
const zoomOut = document.querySelector("#zoom-out");
const boardLinks = [...document.querySelectorAll(".board-link[data-board]")];
let activeIndex = 0;
let origin = null;
let scale = 1;
let fitMode = true;

function setScale(value, center = true) {
  if (!boardImage.naturalWidth) return;
  const centerX = (viewport.scrollLeft + viewport.clientWidth / 2) / (boardImage.naturalWidth * scale);
  const centerY = (viewport.scrollTop + viewport.clientHeight / 2) / (boardImage.naturalHeight * scale);
  scale = Math.min(3, Math.max(.1, value));
  dialog.style.setProperty("--image-width", `${Math.round(boardImage.naturalWidth * scale)}px`);
  zoomLevel.value = `${Math.round(scale * 100)} %`;
  zoomOut.disabled = scale <= .1;
  zoomIn.disabled = scale >= 3;
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
  activeIndex = (index + boardLinks.length) % boardLinks.length;
  const link = boardLinks[activeIndex];
  title.textContent = link.dataset.title;
  boardImage.alt = link.querySelector("img").alt;
  fileLink.href = link.href;
  boardCount.textContent = `${activeIndex + 1} / ${boardLinks.length}`;
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
    activeIndex = boardLinks.findIndex((board) => board.href === link.href);
    dialog.showModal();
    document.body.classList.add("modal-open");
    showBoard(activeIndex);
    document.querySelector("#lightbox-close").focus();
  });
});
document.querySelector("#lightbox-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  if (origin) origin.focus({ preventScroll: true });
});
dialog.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  const focusable = [...dialog.querySelectorAll("button:not(:disabled), a[href], [tabindex='0']")];
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
