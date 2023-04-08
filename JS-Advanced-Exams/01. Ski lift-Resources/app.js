window.addEventListener('load', solve);

function solve() {
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let peopleCountInput = document.getElementById('people-count');
    let dateInput = document.getElementById('from-date');
    let daysCountInput = document.getElementById('days-count');
    let nextStepBtn = document.getElementById('next-btn');

    nextStepBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let peopleCount = peopleCountInput.value;
        let date = dateInput.value;
        let daysCount = daysCountInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        peopleCountInput.value = '';
        dateInput.value = '';
        daysCountInput.value = '';

        let containerPreviewElement = document.querySelector('.ticket-info-list');

        if (firstName === '' || lastName === '' || peopleCount === '' || date === '' || daysCount == '') {
            return;
        }

        let liEl = document.createElement('li');
        liEl.className = 'ticket';
        let articleEl = document.createElement('article');
        let h3El = createElement('h3', `Name: ${firstName} ${lastName}`);
        let pDateEl = createElement('p', `From date: ${date}`);
        let pDaysEl = createElement('p', `For ${daysCount} days`);
        let pPeopleEl = createElement('p', `For ${peopleCount} people`);
        let editBtnEl = createElement('button', 'Edit', 'edit-btn');
        let continueBtnEl = createElement('button', 'Continue', 'continue-btn');

        articleEl.appendChild(h3El);
        articleEl.appendChild(pDateEl);
        articleEl.appendChild(pDaysEl);
        articleEl.appendChild(pPeopleEl);

        liEl.appendChild(articleEl);
        liEl.appendChild(editBtnEl);
        liEl.appendChild(continueBtnEl);

        containerPreviewElement.appendChild(liEl);

        nextStepBtn.disabled = 'true';

        editBtnEl.addEventListener('click', (e) => {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            peopleCountInput.value = peopleCount;
            dateInput.value = date;
            daysCountInput.value = daysCount;

            liEl.remove();

            nextStepBtn.removeAttribute('disabled');
        });

        continueBtnEl.addEventListener('click', () => {
            let containerConfirmElement = document.querySelector('.confirm-ticket');

            containerConfirmElement.appendChild(liEl);

            editBtnEl.remove();
            continueBtnEl.remove();

            let confirmBtnEl = createElement('button', 'Confirm', 'confirm-btn');
            let cancelBtnEl = createElement('button', 'Cancel', 'cancel-btn');

            liEl.appendChild(confirmBtnEl);
            liEl.appendChild(cancelBtnEl);

            cancelBtnEl.addEventListener('click', () => {
                liEl.remove();

                nextStepBtn.removeAttribute('disabled');
            });

            confirmBtnEl.addEventListener('click', () => {
                let mainDivEl = document.getElementById('main');

                mainDivEl.remove();

                let h1ThanksEl = createElement('h1', 'Thank you, have a nice day!');
                h1ThanksEl.setAttribute('id', 'thank-you');
                let backBtnEl = createElement('button', 'Back');
                backBtnEl.setAttribute('id', 'back-btn');

                let bodyEl = document.getElementById('body');

                bodyEl.appendChild(h1ThanksEl);
                bodyEl.appendChild(backBtnEl);

                backBtnEl.addEventListener('click', () => {
                    location.reload();
                });
            });
        });
    });

    function createElement(type, text, nameClass) {
        let newEl = document.createElement(type);
        newEl.textContent = text;

        if (nameClass) {
            newEl.className = nameClass;
        }

        return newEl;
    }
}




