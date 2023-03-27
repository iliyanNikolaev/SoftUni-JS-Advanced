function solve() {

    let inputs = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    }

    let [_, openArea, inProgressArea, finishArea] = document.querySelectorAll('section');


    let addButton = document.getElementById('add');

    addButton.addEventListener('click', add);

    function add(event) {

        event.preventDefault();

        let task = inputs.task.value;
        inputs.task.value = '';
        let description = inputs.description.value;
        inputs.description.value = '';
        let date = inputs.date.value;
        inputs.date.value = '';


        if (task !== '' && description !== '' && date !== '') {

            let article = document.createElement('article');

            let h3 = createElement('h3', task);

            let pDesc = createElement('p', `Description: ${description}`);

            let pDate = createElement('p', `Due Date: ${date}`);

            let div = createElement('div', '', 'flex');

            let startBtn = createElement('button', 'Start', 'green');

            let deleteBtn = createElement('button', 'Delete', 'red');

            article.appendChild(h3);
            article.appendChild(pDesc);
            article.appendChild(pDate);
            div.appendChild(startBtn);
            div.appendChild(deleteBtn);
            article.appendChild(div);

            openArea.appendChild(article);

            startBtn.addEventListener('click', () => {
                startBtn.remove();

                let finishBtn = createElement('button', 'Finish', 'orange');

                div.appendChild(finishBtn);

                inProgressArea.appendChild(article);

                finishBtn.addEventListener('click', () => {
                    finishBtn.remove();
                    deleteBtn.remove();
                    finishArea.appendChild(article);
                });
            });

            deleteBtn.addEventListener('click', () => {
                article.remove();
            });

        }
    }

    function createElement(type, text, clName) {

        let element = document.createElement(type);

        if (clName) {
            element.className = clName;
        }

        element.textContent = text;

        return element;
    }
}