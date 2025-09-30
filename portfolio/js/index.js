document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.question-button-container').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});