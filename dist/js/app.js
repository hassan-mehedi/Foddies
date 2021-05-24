const toggle = document.querySelector(".toggle");
const menu = document.querySelector("ul");
toggle.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    toggle.classList.toggle("rotate");
});
