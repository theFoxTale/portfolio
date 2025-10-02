function addFaqButtonClicker() {
    document.querySelectorAll('.question-header').forEach(item => {
        item.addEventListener('click', function () {
            const buttonContainer = this.querySelector('.question-button-container');
            const isActiveAnswer = buttonContainer.classList.contains('active');

            if (!isActiveAnswer) {
                const allQuestions = document.querySelectorAll('.question-div');
                allQuestions.forEach(question => {
                    question.querySelector('.answer-text').classList.remove('active');
                    question.querySelector('.question-button-container').classList.remove('active');
                });
            }

            buttonContainer.classList.toggle('active');

            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
}