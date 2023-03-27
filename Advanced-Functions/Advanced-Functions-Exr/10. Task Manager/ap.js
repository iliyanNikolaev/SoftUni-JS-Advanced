function solve() {
    let addBtnElement = document.getElementById('add');

    let sectionsElements = document.getElementsByTagName('section');

    let openSectionElement = sectionsElements[1];
    let inProgressSectionElement = sectionsElements[2];
    let comleteSectionElement = sectionsElements[3];

    addBtnElement.addEventListener('click', (event) => { 
        event.preventDefault();

        let taskInputEl = document.getElementById('task');

        let descriptionTextAreaEl = document.getElementById('description');

        let dateInputEl = document.getElementById('date');

        if (taskInputEl.value !== '' && descriptionTextAreaEl.value !== '' && dateInputEl.value !== '') {
            let container = openSectionElement.querySelectorAll('div')[1];

            let article = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = taskInputEl.value;
            taskInputEl.value = '';

            let pDescr = document.createElement('p');
            pDescr.textContent = `Description: ${descriptionTextAreaEl.value}`;
            descriptionTextAreaEl.value = '';

            let pDate = document.createElement('p');
            pDate.textContent = `Due Date: ${dateInputEl.value}`;
            dateInputEl.value = '';

            let divFlex = document.createElement('div');
            divFlex.className = 'flex';

            let greenStartBtn = document.createElement('button');
            greenStartBtn.className = 'green';
            greenStartBtn.textContent = 'Start';

            let redDeleteBtn = document.createElement('button');
            redDeleteBtn.className = 'red';
            redDeleteBtn.textContent = 'Delete';

            divFlex.appendChild(greenStartBtn);
            divFlex.appendChild(redDeleteBtn);

            article.appendChild(h3);
            article.appendChild(pDescr);
            article.appendChild(pDate);
            article.appendChild(divFlex);

            container.appendChild(article);

            greenStartBtn.addEventListener('click', moveElAndReplaceBtn.bind(article));
            redDeleteBtn.addEventListener('click', removeEl.bind(article));

            function removeEl(){
                this.remove();
            }

            function moveElAndReplaceBtn(){
                let addBtn = this.querySelector('button[class="green"]');

                addBtn.remove();

                let newFinishBtn = document.createElement('button');
                newFinishBtn.className = 'orange';
                newFinishBtn.textContent = 'Finish';

                let divContainer = this.querySelector('div[class="flex"]');

                divContainer.appendChild(newFinishBtn);
                
                inProgressSectionElement.appendChild(this);

                newFinishBtn.addEventListener('click', () => {
                    
                    newFinishBtn.remove();

                    let deleteBtn = this.querySelector('button[class=red]');
                    deleteBtn.remove();

                    comleteSectionElement.appendChild(this);
                })
            }
        }
    });   
}