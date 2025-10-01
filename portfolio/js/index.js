// Прокручиваем слайдер до середины контента (используется при загрузке страницы)
function moveSliderToMiddlePosition() {
    window.addEventListener('DOMContentLoaded', function() {
        const sliderContainer = document.querySelector('.slider-container');
        const sliderCarousel = document.querySelector('.slider-carousel');

        const scrollMiddlePosition = (sliderCarousel.scrollWidth + 2 * sliderCarousel.offsetLeft - sliderContainer.clientWidth) / 2;

        sliderContainer.scrollTo({
            left: scrollMiddlePosition,
            behavior: 'smooth'
        });
    });
}

// Превращение + в - и обратно в секции FAQ
function addFaqButtonClicker() {
    document.querySelectorAll('.question-button-container').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addFaqButtonClicker();
    moveSliderToMiddlePosition();
});