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
});