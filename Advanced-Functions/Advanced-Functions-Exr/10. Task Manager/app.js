function solve() {

    let inputs = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    }

    let [_, openArea, inProgressArea, finishArea] = document.querySelectorAll('section')
    document.getElementById('add').addEventListener('click', functionality);

    function functionality(ev) {
    ev.preventDefault();

    let task = inputs.task.value;
    let description = inputs.description.value;
    let date = inputs.date.value;

    if (task !== '' && description !== '' && date !== '') {
      let article = document.createElement('article');
      article.className = 'delegationContainer'//this is the main container
      let h3 = createElement('h3', task);
      let pDesc = createElement('p', `Description: ${description}`);
      let pDate = createElement('p', `Due Date: ${date}`);
      let div = createElement('div', '', 'flex'); // this is the container for buttons
      let startBtn = createElement('button', 'Start', 'green');
      let deleteBtn = createElement('button', 'Delete', 'red');

      article.appendChild(h3);
      article.appendChild(pDesc);
      article.appendChild(pDate);
      div.appendChild(startBtn);
      div.appendChild(deleteBtn);
      article.appendChild(div);
      openArea.appendChild(article);

      inputs.task.value = '';
      inputs.description.value = '';
      inputs.date.value = '';


      article.addEventListener('click', (e) => {
        if (e.target.className === 'red') {
          article.remove();
        } else if (e.target.className === 'green') {
          e.target.remove();

          let finishBtn = document.createElement('button');
          finishBtn.className = 'orange';
          finishBtn.textContent = 'Finish';
          div.appendChild(finishBtn);
          inProgressArea.appendChild(article);
        } else if (e.target.className === 'orange') {
          e.target.remove();
          deleteBtn.remove();

          finishArea.appendChild(article);
        }
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
