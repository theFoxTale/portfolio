let scrollInterval;
let fullStep = 0;
let portfolioCarousel;

function startScroll(direction) {
    const portfolioWrapper = document.querySelector('.slider-wrapper');
    const maxScroll = 0.5 * (portfolioCarousel.scrollWidth - portfolioWrapper.clientWidth);

    const step = direction * 10;
    scrollInterval = setInterval(() => {
        fullStep = (Math.abs(fullStep + step) <= maxScroll) ? fullStep + step : direction * maxScroll;
        portfolioCarousel.style.transform = `translateX(calc(-50% - ${fullStep}px))`;
    }, 1);
}

function stopScroll() {
    clearInterval(scrollInterval);
}

function addCarouselMouseEvents() {
    portfolioCarousel = document.querySelector('.slider-carousel');

    const leftDiv = document.querySelector('.zone-left');
    leftDiv.addEventListener('mouseenter', () => startScroll(-1))
    leftDiv.addEventListener('mouseleave', stopScroll);

    const rightDiv = document.querySelector('.zone-right');
    rightDiv.addEventListener('mouseenter', () => startScroll(1))
    rightDiv.addEventListener('mouseleave', stopScroll);
}