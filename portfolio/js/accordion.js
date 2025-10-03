let accordionStorageKey = 'faqSelectedItem';

function addFaqButtonClicker() {
    document.querySelectorAll('.question-header').forEach((item, index) => {
        item.addEventListener('click', function () {
            const buttonContainer = this.querySelector('.question-button-container');
            const isActiveAnswer = buttonContainer.classList.contains('active');

            if (!isActiveAnswer) {
                const allQuestions = document.querySelectorAll('.question-div');
                allQuestions.forEach(question => {
                    question.querySelector('.answer-text').classList.remove('active');
                    question.querySelector('.question-button-container').classList.remove('active');
                });

                localStorage.setItem(accordionStorageKey, (index + ''));
            } else {
                localStorage.setItem(accordionStorageKey, '0');
            }

            buttonContainer.classList.toggle('active');

            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
}


function openSelectedFaqQuestion() {
    const selectedItem = localStorage.getItem(accordionStorageKey) ?? '0';
    document.querySelectorAll('.question-header')[selectedItem].click();
}