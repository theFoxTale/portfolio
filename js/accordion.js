const accordionStorageKey = 'faqSelectedItem';

function getQuestions() {
    return document.querySelectorAll('.question-div');
}

function closeAll(questions) {
    questions.forEach(question => {
        const answer = question.querySelector('.answer-text');
        answer?.classList.remove('active');
        answer?.setAttribute('aria-hidden', 'true');
        question.querySelector('.question-button-container')?.classList.remove('active');
        question.querySelector('.question-header')?.setAttribute('aria-expanded', 'false');
    });
}

function openItem(questions, index) {
    closeAll(questions);

    const question = questions[index];
    if (!question) {
        return;
    }

    const answer = question.querySelector('.answer-text');
    question.querySelector('.question-button-container')?.classList.add('active');
    answer?.classList.add('active');
    answer?.setAttribute('aria-hidden', 'false');
    question.querySelector('.question-header')?.setAttribute('aria-expanded', 'true');
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
