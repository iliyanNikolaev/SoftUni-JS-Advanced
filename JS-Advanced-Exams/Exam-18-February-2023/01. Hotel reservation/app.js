window.addEventListener('load', solve);

function solve() {

    const firstNameEl = document.getElementById('first-name');
    const lastNameEl = document.getElementById('last-name');
    const dateInEl = document.getElementById('date-in');
    const dateOutEl = document.getElementById('date-out');
    const pplCountEl = document.getElementById('people-count');
    const nextBtnEl = document.getElementById('next-btn');

    nextBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        let firstName = firstNameEl.value;
        let lastName = lastNameEl.value;
        let dateIn = dateInEl.value;
        let dateOut = dateOutEl.value;
        let pplCount = Number(pplCountEl.value);
        firstNameEl.value = '';
        lastNameEl.value = '';
        dateInEl.value = '';
        dateOutEl.value = '';
        pplCountEl.value = '';


        if (firstName !== '' && lastName !== '' && dateIn !== '' && dateOut !== '' && pplCount !== '' && dateIn < dateOut) {
            nextBtnEl.disabled = true;
            let infoContainerUl = document.querySelector('.info-list');
            let li = document.createElement('li');
            li.classList.add('reservation-content');

            let article = createElement('article');
            let h3 = createElement('h3', `Name: ${firstName} ${lastName}`);
            let pDateIn = createElement('p', `From date: ${dateIn}`);
            let pDateOut = createElement('p', `To date: ${dateOut}`);
            let pPplCount = createElement('p', `For ${pplCount} people`);
            let editBtn = createElement('button', 'Edit', 'edit-btn');
            let continueBtn = createElement('button', 'Continue', 'continue-btn');

            article.appendChild(h3);
            article.appendChild(pDateIn);
            article.appendChild(pDateOut);
            article.appendChild(pPplCount);

            li.appendChild(article);
            li.appendChild(editBtn);
            li.appendChild(continueBtn);

            infoContainerUl.appendChild(li);

            editBtn.addEventListener('click', () => {
                li.remove();
                
                nextBtnEl.disabled = false;

                firstNameEl.value = firstName;
                lastNameEl.value = lastName;
                dateInEl.value = dateIn;
                dateOutEl.value = dateOut;
                pplCountEl.value = pplCount;
            });

            continueBtn.addEventListener('click', () => {
                editBtn.remove();
                continueBtn.remove();

                let confirmBtn = createElement('button', 'Confirm', 'confirm-btn');
                let cancelBtn = createElement('button', 'Cancel', 'cancel-btn');

                li.appendChild(confirmBtn);
                li.appendChild(cancelBtn);

                let confirmContainerUl = document.querySelector('.confirm-list');

                confirmContainerUl.appendChild(li);
                let h1TextContainer = document.getElementById('verification');

                confirmBtn.addEventListener('click', () => {
                    h1TextContainer.classList.add('reservation-confirmed');
                    h1TextContainer.textContent = 'Confirmed.';

                    li.remove();
                    nextBtnEl.disabled = false;
                });

                cancelBtn.addEventListener('click', () => {
                    h1TextContainer.classList.add('reservation-cancelled');
                    h1TextContainer.textContent = 'Cancelled.';

                    li.remove();
                    nextBtnEl.disabled = false;
                });
            });
        }


    });

    function createElement(type, content, nameClass) {
        let el = document.createElement(type);
        if (content !== undefined) {
            el.textContent = content;
        }

        if (nameClass !== undefined) {
            el.classList.add(nameClass);
        }

        return el;
    }
}





