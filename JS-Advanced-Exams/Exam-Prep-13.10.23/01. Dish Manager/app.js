window.addEventListener("load", solve);

function solve() {
  const inProgressContainer = document.querySelector('#in-progress');
  const inProgressCounterEl = document.querySelector('#progress-count');
  const completeContainer = document.querySelector('#finished');
  const formValues = [
    document.querySelector('#first-name'),
    document.querySelector('#last-name'),
    document.querySelector('#age'),
    document.querySelector('#genderSelect'),
    document.querySelector('#task'),
  ];
  const addBtn = document.querySelector('#form-btn');
  const clearBtn = document.querySelector('#clear-btn');
  addBtn.addEventListener('click', () => {
    const data = {};
    formValues.forEach(x => data[x.id] = x.value);
    appendElementInProgress(data);
    formValues.map(x => x.value = '');
  });
  clearBtn.addEventListener('click', () => {
    completeContainer.innerHTML = '';
  });

  function appendElementInProgress(data) {
    const li = document.createElement('li');
    li.className = 'each-line';
    li.innerHTML = `
    <article>
      <h4>${data['first-name']} ${data['last-name']}</h4>
      <p>${data.genderSelect}, ${data.age}</p>
      <p>Dish description: ${data.task}</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="complete-btn">Mark as complete</button>`;
    inProgressContainer.appendChild(li);
    incrementCounter();

    li.querySelector('.edit-btn').addEventListener('click', () => edit(data, li));
    li.querySelector('.complete-btn').addEventListener('click', () => complete(data, li));
  }

  function incrementCounter() {
    inProgressCounterEl.textContent = Number(inProgressCounterEl.textContent) + 1;
  }
  function decrementCounter() {
    inProgressCounterEl.textContent = Number(inProgressCounterEl.textContent) - 1;
  }

  function edit(data, li) {
    li.remove();
    decrementCounter();
    formValues.forEach(x => x.value = data[x.id]);
  }

  function complete(data, oldLi) {
    const li = document.createElement('li');
    li.className = 'each-line';
    li.innerHTML = `
    <article>
      <h4>${data['first-name']} ${data['last-name']}</h4>
      <p>${data.genderSelect}, ${data.age}</p>
      <p>Dish description: ${data.task}</p>
    </article>`;
    oldLi.remove();
    decrementCounter();
    completeContainer.appendChild(li);
  }
}
