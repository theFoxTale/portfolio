let isMobileMenuOpen = false;

function toggleBurgerMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;

    const burgerMenu = document.querySelector('.burger-menu-container');
    burgerMenu.classList.toggle('active');

    const menuIconLines = document.querySelectorAll('.menu-line');
    menuIconLines.forEach(item => item.classList.toggle('active'));

    document.body.classList.toggle('no-scroll');
}

function addMenuIconClicker() {
    const menuIcon = document.querySelector('.menu-logo-container');
    menuIcon.addEventListener('click', toggleBurgerMenu);
}

function addBurgerMenuClicker() {
    const burgerMenuItems = document.querySelectorAll('.burger-menu-list a');
    burgerMenuItems.forEach(item => item.addEventListener('click', function(event) {
        event.preventDefault();

        const targetSectionId = this.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);

        if (targetSection) {
            toggleBurgerMenu();

            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 500);
        }
    }));
}