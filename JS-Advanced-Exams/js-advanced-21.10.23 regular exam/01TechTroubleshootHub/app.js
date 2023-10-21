window.addEventListener('load', solution);

function solution() {
  const addBtn = document.querySelector('#add-btn');
  const form = document.querySelector('form');
  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolvedList = document.querySelector('.resolved-list');
  const formValues = [
    document.querySelector('#employee'),
    document.querySelector('#category'),
    document.querySelector('#urgency'),
    document.querySelector('#team'),
    document.querySelector('#description'),
  ];

  form.addEventListener('submit', submitHandler);
  function submitHandler(e) {
    e.preventDefault();
    const data = {
      employee: formValues[0].value,
      category: formValues[1].value,
      urgency: formValues[2].value,
      team: formValues[3].value,
      description: formValues[4].value
    }
    //validate data
    for (const entry in data) {
      if (data[entry] == '') {
        return 'invalid data';
      }
    }
    createAndAppendPreviewItem(data);
    formValues.forEach(x => x.value = '');
    addBtn.disabled = true;
  }

  function createAndAppendPreviewItem(data) {
    const li = document.createElement('li');
    li.className = 'problem-content';
    li.innerHTML = `
    <article>
      <p>From: ${data.employee}</p>
      <p>Category: ${data.category}</p>
      <p>Urgency: ${data.urgency}</p>
      <p>Assigned to: ${data.team}</p>
      <p>Description: ${data.description}</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="continue-btn">Continue</button>`;

    previewList.appendChild(li);
    li.querySelector('.edit-btn').addEventListener('click', () => editPreviewHandler(data, li));
    li.querySelector('.continue-btn').addEventListener('click', () => createAndAppendPendingItem(data, li));
  }

  function editPreviewHandler(data, li) {
    formValues.forEach(x => x.value = data[x.id]);
    li.remove();
    addBtn.disabled = false;
  }

  function createAndAppendPendingItem(data, li) {
    li.innerHTML = `
    <article>
      <p>From: ${data.employee}</p>
      <p>Category: ${data.category}</p>
      <p>Urgency: ${data.urgency}</p>
      <p>Assigned to: ${data.team}</p>
      <p>Description: ${data.description}</p>
    </article>
    <button class="resolve-btn">Resolve</button>`;
    li.remove();
    pendingList.appendChild(li);
    li.querySelector('.resolve-btn').addEventListener('click', () => createAndAppendResolvedItem(data, li));
  }

  function createAndAppendResolvedItem(data, li) {
    li.innerHTML = `
    <article>
      <p>From: ${data.employee}</p>
      <p>Category: ${data.category}</p>
      <p>Urgency: ${data.urgency}</p>
      <p>Assigned to: ${data.team}</p>
      <p>Description: ${data.description}</p>
    </article>
    <button class="clear-btn">Clear</button>`;
    li.remove();
    resolvedList.appendChild(li);
    li.querySelector('.clear-btn').addEventListener('click', () => clearResolvedItem(li));
  }

  function clearResolvedItem(li) {
    li.remove();
  }
}




