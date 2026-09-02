import { bindBookingFields } from "./form-validation.js";

export default function initContacts() {
    const nameInput = document.querySelector('.contacts-name');
    const phoneInput = document.querySelector('.contacts-phone');
    const submitButton = document.querySelector('.contacts-button');

    if (!nameInput || !phoneInput || !submitButton) {
        return;
    }

    bindBookingFields({ nameInput, phoneInput, submitButton });
}
