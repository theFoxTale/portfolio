document.addEventListener('DOMContentLoaded', () => {
    addMenuIconClicker();
    addBurgerMenuClicker();
    window.addEventListener('resize', handleWindowResize);

    initCarouselElements();
    addCarouselMouseEvents();
    addCarouselTouchEvents();

    initPopUpElements();
    addBookingButtonsClicker();
    popUpValidationClicker();

    addFaqButtonClicker();
    openSelectedFaqQuestion();
});