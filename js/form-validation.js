export const PHONE_COUNTRY_CODE = '+1';
export const PHONE_PREFIX = `${PHONE_COUNTRY_CODE} `;
export const BOOKING_WHATSAPP_NUMBER = '12349843572';

const phonePattern = new RegExp(
    `^\\${PHONE_COUNTRY_CODE}\\s\\([0-9]{3}\\)\\s[0-9]{3}-[0-9]{4}$`
);

export function sanitizeName(value) {
    return value
        .replace(/[^a-zA-Zа-яА-ЯёЁ\s'\-]/g, '')
        .replace(/^\s+/, '')
        .replace(/\s{2,}/g, ' ');
}

export function isNameValid(value) {
    const name = value.trim();
    return name.length >= 3 && /[a-zA-Zа-яА-ЯёЁ]/.test(name);
}

export function formatPhone(value) {
    let formattedValue = value.replace(/[^\d+]/g, '');
    const prefixPattern = new RegExp(`^\\+?${PHONE_COUNTRY_CODE.replace('+', '')}?`);

    if (!formattedValue.startsWith(PHONE_COUNTRY_CODE)) {
        formattedValue = PHONE_COUNTRY_CODE + formattedValue.replace(prefixPattern, '');
    }

    if (formattedValue.length > PHONE_COUNTRY_CODE.length) {
        const numbers = formattedValue.substring(PHONE_COUNTRY_CODE.length).replace(/\D/g, '');
        formattedValue = PHONE_PREFIX;

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

export function openBookingWhatsApp(name, phone, packageName) {
    const bookingLine = packageName
        ? `I would like to book the ${packageName} package.`
        : 'I would like to book a shoot.';
    const text = encodeURIComponent(
        `Hello! My name is ${name}. ${bookingLine} My phone: ${phone}`
    );

    window.open(
        `https://wa.me/${BOOKING_WHATSAPP_NUMBER}?text=${text}`,
        '_blank',
        'noopener,noreferrer'
    );
}

export function bindBookingFields({ nameInput, phoneInput, submitButton, onValidSubmit }) {
    let isNameOk = false;
    let isPhoneOk = false;

    function updateSubmitButton() {
        (isNameOk && isPhoneOk)
            ? submitButton.classList.remove('disabled')
            : submitButton.classList.add('disabled');
    }

    function reset(name = '', phone = PHONE_PREFIX) {
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

        onValidSubmit?.({
            name: nameInput.value.trim(),
            phone: phoneInput.value,
        });
    });

    updateSubmitButton();

    return { reset };
}
