import { bindBookingFields, openBookingWhatsApp } from "./form-validation.js";

export default function initContacts() {
    const form = document.querySelector('.contacts-form');
    const nameInput = document.querySelector('.contacts-name');
    const phoneInput = document.querySelector('.contacts-phone');
    const submitButton = document.querySelector('.contacts-button');

    if (!form || !nameInput || !phoneInput || !submitButton) {
        return;
    }

    bindBookingFields({
        form,
        nameInput,
        phoneInput,
        submitButton,
        onValidSubmit: ({ name, phone }) => openBookingWhatsApp(name, phone),
    });
}
