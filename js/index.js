import initAccordion from "./accordion.js";
import initBurgerMenu from "./burger-menu.js";
import initCarousel from "./carousel.js";
import initPopUp from "./pop-up.js";

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initCarousel();
    initPopUp();
    initAccordion();
});