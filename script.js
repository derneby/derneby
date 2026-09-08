const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".desktop-nav");

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  if (!open) {
    nav.style.display = "flex";
    nav.style.position = "absolute";
    nav.style.top = "78px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "22px";
    nav.style.background = "#0b101a";
    nav.style.flexDirection = "column";
    nav.style.borderBottom = "1px solid #202a3d";
  } else {
    nav.removeAttribute("style");
  }
});