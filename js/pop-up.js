import { bindBookingFields } from "./form-validation.js";

let popUpWindow, popUpName, popUpPhone, popUpButton;

function initPopUpElements() {
    popUpWindow = document.querySelector('.pop-up');
    popUpName = document.querySelector('.pop-up-name');
    popUpPhone = document.querySelector('.pop-up-phone');
    popUpButton = document.querySelector('.button-div.pop-up-element');
}

function closePopUp() {
    popUpWindow.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function openPopUp() {
    popUpName.value = '';
    popUpPhone.value = '+1 ';
    popUpName.dispatchEvent(new Event('input'));
    popUpPhone.dispatchEvent(new Event('input'));

    popUpWindow.classList.add('active');
    document.body.classList.add('no-scroll');

    setTimeout(function () {
        popUpName.focus();
    }, 10);
}

function addBookingButtonsClicker() {
    /* Открытие с карточек тарифов */
    document.querySelectorAll('.book-now').forEach(item => {
        item.addEventListener('click', openPopUp);
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
    addBookingButtonsClicker();
    bindBookingFields({
        nameInput: popUpName,
        phoneInput: popUpPhone,
        submitButton: popUpButton,
        onValidSubmit: closePopUp,
    });
};
