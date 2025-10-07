document.addEventListener('DOMContentLoaded', () => {
    addMenuIconClicker();
    addBurgerMenuClicker();
    window.addEventListener('resize', handleWindowResize);

    initCarouselElements();
    addCarouselMouseEvents();
    addCarouselTouchEvents();

    addBookingButtonsClicker();

    addFaqButtonClicker();
    openSelectedFaqQuestion();
});