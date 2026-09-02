const accordionStorageKey = 'faqSelectedItem';

function getQuestions() {
    return document.querySelectorAll('.question-div');
}

function closeAll(questions) {
    questions.forEach(question => {
        question.querySelector('.answer-text')?.classList.remove('active');
        question.querySelector('.question-button-container')?.classList.remove('active');
    });
}

function openItem(questions, index) {
    closeAll(questions);

    const question = questions[index];
    if (!question) {
        return;
    }

    question.querySelector('.question-button-container')?.classList.add('active');
    question.querySelector('.answer-text')?.classList.add('active');
}

function persistIndex(index) {
    localStorage.setItem(accordionStorageKey, String(index));
}

function readStoredIndex(count) {
    const raw = localStorage.getItem(accordionStorageKey);
    const index = raw === null ? 0 : Number.parseInt(raw, 10);

    if (!Number.isInteger(index) || index < 0 || index >= count) {
        return 0;
    }

    return index;
}

function addFaqButtonClicker(questions) {
    questions.forEach((item, index) => {
        const header = item.querySelector('.question-header');
        if (!header) {
            return;
        }

        header.addEventListener('click', () => {
            const isOpen = header.querySelector('.question-button-container')?.classList.contains('active');

            if (isOpen) {
                closeAll(questions);
            } else {
                openItem(questions, index);
            }

            persistIndex(index);
        });
    });
}

function openSelectedFaqQuestion(questions) {
    openItem(questions, readStoredIndex(questions.length));
}

export default function initAccordion() {
    const questions = getQuestions();
    if (!questions.length) {
        return;
    }

    addFaqButtonClicker(questions);
    openSelectedFaqQuestion(questions);
}
