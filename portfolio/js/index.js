document.addEventListener('DOMContentLoaded', () => {
    addMenuIconClicker();
    addBurgerMenuClicker();
    window.addEventListener('resize', handleWindowResize);

    addCarouselMouseEvents();

    addBookingButtonsClicker();

    addFaqButtonClicker();
    openSelectedFaqQuestion();
});