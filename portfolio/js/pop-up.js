let isNameOk = false;
let isPhoneOk = false;

let popUpWindow, popUpName, popUpPhone, popUpButton;

function initPopUpElements() {
    popUpWindow = document.querySelector('.pop-up');
    popUpName = document.querySelector('.pop-up-name');
    popUpPhone = document.querySelector('.pop-up-phone');
    popUpButton = document.querySelector('.button-div.pop-up-element');
}

function togglePopUp() {
    popUpWindow.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

function openPopUp() {
    popUpName.value = '';
    popUpPhone.value = '+1';
    popUpButton.classList.add('disabled');

    togglePopUp();

    setTimeout(function () {
        popUpName.focus();
    }, 10);
}

function addBookingButtonsClicker() {
    /* Открытие */
    document.querySelectorAll('.book-now').forEach(item => {
        item.addEventListener('click', openPopUp);
    });

    /* Закрыть при клике по фону */
    popUpWindow.addEventListener('click', (event) => {
        if (event.target.classList.contains('pop-up')) {
            togglePopUp();
        }
    });

    /* Закрыть при клике по крестику */
    document.getElementById('close-pop-up-button').addEventListener('click', togglePopUp);

    /* Закрыть при нажатии кнопки booking */
    popUpButton.addEventListener('click', togglePopUp);
}

function checkPopUpButton() {
    (isNameOk && isPhoneOk) ? popUpButton.classList.remove('disabled') : popUpButton.classList.add('disabled');
}

function popUpValidationClicker() {
    popUpName.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
        isNameOk  = this.value && this.value.length >= 3;
        checkPopUpButton()
    });

    popUpPhone.addEventListener('input', function(e) {
        let value = e.target.value.replace(/[^\d+]/g, '');

        if (!value.startsWith('+1')) {
            value = '+1' + value.replace(/^\+?1?/, '');
        }

        if (value.length > 2) {
            const numbers = value.substring(2).replace(/\D/g, '');
            let formatted = '+1 ';

            if (numbers.length > 0) {
                formatted += '(' + numbers.substring(0, 3);
            }
            if (numbers.length > 3) {
                formatted += ') ' + numbers.substring(3, 6);
            }
            if (numbers.length > 6) {
                formatted += '-' + numbers.substring(6, 10);
            }

            value = formatted;
        }

        e.target.value = value;

        const phonePattern = /^\+1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/;
        isPhoneOk = phonePattern.test(value);
        checkPopUpButton();
    });
}

export default function initPopUp() {
    initPopUpElements();
    addBookingButtonsClicker();
    popUpValidationClicker();
};