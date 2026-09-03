let resizeTimeout;
let isBurgerMenuOpen = false;
let burgerMenu;
let menuIcon;

function toggleBurgerMenu() {
    isBurgerMenuOpen = !isBurgerMenuOpen;

    burgerMenu.classList.toggle('active');

    const menuIconLines = document.querySelectorAll('.menu-line');
    menuIconLines.forEach(item => item.classList.toggle('active'));

    document.body.classList.toggle('no-scroll');
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
                behavior: 'smooth'
            });
        }
    }));
}

function handleWindowResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 768 && isBurgerMenuOpen) {
            toggleBurgerMenu();
        }
    }, 150);
}

export default function initBurgerMenu() {
    burgerMenu = document.querySelector('.header-navigation-container');
    menuIcon = document.querySelector('.menu-logo-container');

    if (!burgerMenu || !menuIcon) {
        return;
    }

    addMenuIconClicker();
    addBurgerMenuClicker();
    window.addEventListener('resize', handleWindowResize);
}
