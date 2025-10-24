let scrollInterval;
let carouselShift = 0;

let portfolioCarousel, portfolioWrapper;

let touchIsActive = false;
let touchStartPosition = 0;
let touchShift = 0;

/* Перемещение мышкой */
function startScroll(direction) {
    if (touchIsActive) return;

    scrollInterval = setInterval(() => {
        carouselShift = shiftCarousel(direction * 10, direction);
    }, 10);
}

function stopScroll() {
    clearInterval(scrollInterval);
}

/* Сдвиг карусели */
function shiftCarousel(step, direction) {
    const maxShift = 0.5 * (portfolioCarousel.scrollWidth - portfolioWrapper.clientWidth);
    const resultShift = (Math.abs(carouselShift + step) <= maxShift) ? carouselShift + step : direction * maxShift;

    portfolioCarousel.style.transform = `translateX(calc(-50% - ${resultShift}px))`;

    return resultShift;
}

/* Перемещение пальцем */
function touchStart(event) {
    touchIsActive = true;
    touchStartPosition = event.clientX;
}

function touchMove(event) {
    if (!touchIsActive) return;

    let xDifference = touchStartPosition - event.clientX;
    const direction = (xDifference > 0) ? 1 : -1;

    const absMove = Math.abs(xDifference);
    if (absMove > 20) {
        if (absMove < 150) xDifference = direction * 150;
        touchShift = shiftCarousel(xDifference, direction);
    }
}

function touchEnd() {
    touchIsActive = false;
    carouselShift = touchShift;
    touchShift = 0;
}

/* Подключение событий */
function initCarouselElements() {
    portfolioCarousel = document.querySelector('.slider-carousel');
    portfolioWrapper = document.querySelector('.slider-wrapper');
}

function addCarouselMouseEvents() {
    const leftDiv = document.querySelector('.zone-left');
    leftDiv.addEventListener('mouseenter', () => startScroll(-1))
    leftDiv.addEventListener('mouseleave', stopScroll);

    const rightDiv = document.querySelector('.zone-right');
    rightDiv.addEventListener('mouseenter', () => startScroll(1))
    rightDiv.addEventListener('mouseleave', stopScroll);
}

function addCarouselTouchEvents() {
    portfolioWrapper.addEventListener('touchstart', event => touchStart(event.touches[0]));
    portfolioWrapper.addEventListener('touchmove', event => touchMove(event.touches[0]));
    portfolioWrapper.addEventListener('touchend', touchEnd);
}

export default function initCarousel() {
    initCarouselElements();
    addCarouselMouseEvents();
    addCarouselTouchEvents();
}