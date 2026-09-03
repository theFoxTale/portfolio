import { bindBookingFields, openBookingWhatsApp } from "./form-validation.js";

let popUpWindow, popUpForm, popUpName, popUpPhone, popUpButton;
let resetPopUpFields;
let selectedPackageName = '';
let isClosingPopUp = false;
let closePopUpTimeoutId;

function initPopUpElements() {
    popUpWindow = document.querySelector('.pop-up');
    popUpForm = document.querySelector('.pop-up-form');
    popUpName = document.querySelector('.pop-up-name');
    popUpPhone = document.querySelector('.pop-up-phone');
    popUpButton = document.querySelector('.button-div.pop-up-element');
}

function onCloseTransitionEnd(event) {
    if (event.target !== popUpWindow || event.propertyName !== 'opacity') {
        return;
    }

    finishClosePopUp();
}

function finishClosePopUp() {
    clearTimeout(closePopUpTimeoutId);
    popUpWindow.removeEventListener('transitionend', onCloseTransitionEnd);

    if (popUpWindow.open) {
        popUpWindow.close();
    }

    isClosingPopUp = false;
}

function closePopUp() {
    if (!popUpWindow.open || isClosingPopUp) {
        return;
    }

    isClosingPopUp = true;
    selectedPackageName = '';
    document.body.classList.remove('no-scroll');
    popUpWindow.classList.remove('active');

    popUpWindow.addEventListener('transitionend', onCloseTransitionEnd);
    closePopUpTimeoutId = setTimeout(finishClosePopUp, 800);
}

function openPopUp(packageName) {
    if (isClosingPopUp) {
        finishClosePopUp();
    }

    selectedPackageName = packageName || '';
    resetPopUpFields();

    popUpWindow.showModal();
    document.body.classList.add('no-scroll');

    requestAnimationFrame(() => {
        popUpWindow.classList.add('active');
    });

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
    popUpWindow.addEventListener('cancel', (event) => {
        event.preventDefault();
        closePopUp();
    });

    const closeButton = document.getElementById('close-pop-up-button');
    closeButton?.addEventListener('click', closePopUp);
}

export default function initPopUp() {
    initPopUpElements();

    if (!popUpWindow || !popUpForm || !popUpName || !popUpPhone || !popUpButton) {
        return;
    }

    resetPopUpFields = bindBookingFields({
        form: popUpForm,
        nameInput: popUpName,
        phoneInput: popUpPhone,
        submitButton: popUpButton,
        onValidSubmit: submitPopUp,
    }).reset;

    addBookingButtonsClicker();
}
