function togglePopUp() {
    const popUp = document.querySelector('.pop-up');
    popUp.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

function addBookingButtonsClicker() {
    /* Открытие */
    document.querySelectorAll('.book-now').forEach(item => {
        item.addEventListener('click', togglePopUp);
    });

    /* Закрыть при клике по фону */
    const popUp = document.querySelector('.pop-up');
    popUp.addEventListener('click', (event) => {
        if (event.target.classList.contains('pop-up')) {
            togglePopUp(popUp);
        }
    });

    /* Закрыть при клике по крестику */
    document.getElementById('close-pop-up-button').addEventListener('click', togglePopUp);
}
