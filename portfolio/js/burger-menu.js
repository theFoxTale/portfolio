let isMobileMenuOpen = false;

function toggleBurgerMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;

    const burgerMenu = document.querySelector('.burger-menu-container');
    burgerMenu.classList.toggle('active');

    const menuIconLines = document.querySelectorAll('.menu-line');
    menuIconLines.forEach(item => item.classList.toggle('active'));
}

function addMenuIconClicker() {
    const menuIcon = document.querySelector('.menu-logo-container');
    menuIcon.addEventListener('click', toggleBurgerMenu);
}