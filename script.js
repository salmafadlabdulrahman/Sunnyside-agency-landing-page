const menu = document.querySelector(".navlist");
const openMenu = document.querySelector(".toggle");


openMenu.addEventListener("click", () => {
    menu.classList.toggle('navigation-open');
})