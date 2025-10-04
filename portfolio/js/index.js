document.addEventListener('DOMContentLoaded', () => {
    addMenuIconClicker();
    addBurgerMenuClicker();
    window.addEventListener('resize', handleWindowResize);

    addBookingButtonsClicker();

    addFaqButtonClicker();
    openSelectedFaqQuestion();
});