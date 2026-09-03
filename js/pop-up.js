import { bindBookingFields, openBookingWhatsApp } from "./form-validation.js";

let popUpWindow, popUpName, popUpPhone, popUpButton;
let resetPopUpFields;
let selectedPackageName = '';

function initPopUpElements() {
    popUpWindow = document.querySelector('.pop-up');
    popUpName = document.querySelector('.pop-up-name');
    popUpPhone = document.querySelector('.pop-up-phone');
    popUpButton = document.querySelector('.button-div.pop-up-element');
}

function closePopUp() {
    popUpWindow.classList.remove('active');
    document.body.classList.remove('no-scroll');
    selectedPackageName = '';
}

function openPopUp(packageName) {
    selectedPackageName = packageName || '';
    resetPopUpFields();

    popUpWindow.classList.add('active');
    document.body.classList.add('no-scroll');

    setTimeout(function () {
        popUpName.focus();
    }, 10);
}

function readPackageName(bookButton) {
    return bookButton.closest('.price-block')?.querySelector('h3')?.textContent.trim() || '';
}

function submitPopUp({ name, phone }) {
    openBookingWhatsApp(name, phone, selectedPackageName);
    closePopUp();
}

function addBookingButtonsClicker() {
    /* Открытие с карточек тарифов */
    document.querySelectorAll('.book-now').forEach(item => {
        item.addEventListener('click', () => openPopUp(readPackageName(item)));
    });

    /* Закрыть при клике по фону */
    popUpWindow.addEventListener('click', (event) => {
        if (event.target.classList.contains('pop-up')) {
            closePopUp();
        }
    });

    /* Закрыть при клике по крестику */
    document.getElementById('close-pop-up-button').addEventListener('click', closePopUp);
}

export default function initPopUp() {
    initPopUpElements();

    if (!popUpWindow || !popUpName || !popUpPhone || !popUpButton) {
        return;
    }

    resetPopUpFields = bindBookingFields({
        nameInput: popUpName,
        phoneInput: popUpPhone,
        submitButton: popUpButton,
        onValidSubmit: submitPopUp,
    }).reset;

    addBookingButtonsClicker();
}
