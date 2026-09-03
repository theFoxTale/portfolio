import { prefersReducedMotion } from "./reduced-motion.js";

const burgerBreakpoint = window.matchMedia('(max-width: 768px)');

let isBurgerMenuOpen = false;
let burgerMenu;
let menuIcon;

function syncBurgerA11y() {
    menuIcon.setAttribute('aria-expanded', String(isBurgerMenuOpen));
    menuIcon.setAttribute('aria-label', isBurgerMenuOpen ? 'Close menu' : 'Open menu');
}

function isBookingDialogOpen() {
    const dialog = document.querySelector('.pop-up');
    return Boolean(dialog?.open);
}

function setBurgerMenuOpen(open, { animate = true } = {}) {
    if (isBurgerMenuOpen === open) {
        return;
    }

    const shouldAnimate = animate && burgerBreakpoint.matches && !prefersReducedMotion();

    if (shouldAnimate) {
        burgerMenu.classList.add('is-animating');
        burgerMenu.offsetWidth;
    } else {
        burgerMenu.classList.remove('is-animating');
    }

    isBurgerMenuOpen = open;
    burgerMenu.classList.toggle('active', open);

    const menuIconLines = document.querySelectorAll('.menu-line');
    menuIconLines.forEach(item => item.classList.toggle('active', open));

    document.body.classList.toggle('no-scroll', open);
    syncBurgerA11y();
}

function toggleBurgerMenu() {
    setBurgerMenuOpen(!isBurgerMenuOpen);
}

function addMenuIconClicker() {
    menuIcon.addEventListener('click', toggleBurgerMenu);
}

function addBurgerMenuClicker() {
    const burgerMenuItems = burgerMenu.querySelectorAll('a');
    burgerMenuItems.forEach(item => item.addEventListener('click', function(event) {
        if (!isBurgerMenuOpen) {
            return;
        }

        event.preventDefault();

        const targetSectionId = this.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);

        if (targetSection) {
            toggleBurgerMenu();
            targetSection.scrollIntoView({
                behavior: prefersReducedMotion() ? 'auto' : 'smooth'
            });
        }
    }));
}

function handleDocumentKeydown(event) {
    if (event.key !== 'Escape' || !isBurgerMenuOpen || isBookingDialogOpen()) {
        return;
    }

    toggleBurgerMenu();
}

function handleBurgerBreakpointChange(event) {
    if (!event.matches) {
        setBurgerMenuOpen(false, { animate: false });
    }
}

function handleMenuTransitionEnd(event) {
    if (event.target !== burgerMenu || isBurgerMenuOpen) {
        return;
    }

    burgerMenu.classList.remove('is-animating');
}

export default function initBurgerMenu() {
    burgerMenu = document.querySelector('.header-navigation-container');
    menuIcon = document.querySelector('.menu-logo-container');

    if (!burgerMenu || !menuIcon) {
        return;
    }

    syncBurgerA11y();
    addMenuIconClicker();
    addBurgerMenuClicker();
    burgerMenu.addEventListener('transitionend', handleMenuTransitionEnd);
    document.addEventListener('keydown', handleDocumentKeydown);
    burgerBreakpoint.addEventListener('change', handleBurgerBreakpointChange);
}
