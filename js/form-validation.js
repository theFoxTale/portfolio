const phonePattern = /^\+1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/;

export function sanitizeName(value) {
    return value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
}

export function isNameValid(value) {
    return Boolean(value && value.length >= 3);
}

export function formatPhone(value) {
    let formattedValue = value.replace(/[^\d+]/g, '');

    if (!formattedValue.startsWith('+1')) {
        formattedValue = '+1' + formattedValue.replace(/^\+?1?/, '');
    }

    if (formattedValue.length > 2) {
        const numbers = formattedValue.substring(2).replace(/\D/g, '');
        formattedValue = '+1 ';

        if (numbers.length > 0) {
            formattedValue += '(' + numbers.substring(0, 3);
        }
        if (numbers.length > 3) {
            formattedValue += ') ' + numbers.substring(3, 6);
        }
        if (numbers.length > 6) {
            formattedValue += '-' + numbers.substring(6, 10);
        }
    }

    return formattedValue;
}

export function isPhoneValid(value) {
    return phonePattern.test(value);
}

export function bindBookingFields({ nameInput, phoneInput, submitButton, onValidSubmit }) {
    let isNameOk = false;
    let isPhoneOk = false;

    function updateSubmitButton() {
        (isNameOk && isPhoneOk)
            ? submitButton.classList.remove('disabled')
            : submitButton.classList.add('disabled');
    }

    function reset(name = '', phone = '+1 ') {
        nameInput.value = name;
        phoneInput.value = phone;
        isNameOk = isNameValid(sanitizeName(name));
        isPhoneOk = isPhoneValid(phone);
        updateSubmitButton();
    }

    nameInput.addEventListener('input', function() {
        this.value = sanitizeName(this.value);
        isNameOk = isNameValid(this.value);
        updateSubmitButton();
    });

    phoneInput.addEventListener('input', function() {
        this.value = formatPhone(this.value);
        isPhoneOk = isPhoneValid(this.value);
        updateSubmitButton();
    });

    submitButton.addEventListener('click', () => {
        if (submitButton.classList.contains('disabled')) {
            return;
        }

        onValidSubmit?.();
    });

    updateSubmitButton();

    return { reset };
}
