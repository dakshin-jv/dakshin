const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("#mobile-nav");
const copyButton = document.querySelector("[data-copy-email]");
const toast = document.querySelector("[data-toast]");
const email = "dakshinjv@icloud.com";

const savedTheme = localStorage.getItem("djv-theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

function setTheme(next) {
  root.setAttribute("data-theme", next);
  localStorage.setItem("djv-theme", next);
}

themeToggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = current === "dark" || (!current && systemDark);
  setTheme(isDark ? "light" : "dark");
});

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mobileNav.hidden = open;
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.hidden = true;
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

copyButton?.addEventListener("click", async () => {
  const original = copyButton.textContent;
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Copied";
    showToast("Email copied");
  } catch {
    copyButton.textContent = "Copy failed";
    showToast(email);
  }
  window.setTimeout(() => {
    copyButton.textContent = original;
  }, 2000);
});

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  window.setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}
