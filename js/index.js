import initAccordion from "./accordion.js";
import initBurgerMenu from "./burger-menu.js";
import initCarousel from "./carousel.js";
import initContacts from "./contacts.js";
import initPopUp from "./pop-up.js";

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initCarousel();
    initPopUp();
    initContacts();
    initAccordion();
});