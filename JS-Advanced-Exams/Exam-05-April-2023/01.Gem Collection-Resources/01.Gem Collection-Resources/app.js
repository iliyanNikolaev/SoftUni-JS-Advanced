window.addEventListener("load", solve);

function solve() {
    const formElements = [
        document.querySelector('#gem-name'),
        document.querySelector('#color'),
        document.querySelector('#carats'),
        document.querySelector('#price'),
        document.querySelector('#type')
    ];

    const addBtn = document.querySelector('#add-btn');
    const previewContainer = document.querySelector('#preview-list');
    const collectionContainer = document.querySelector('#collection');

    addBtn.addEventListener('click', addNewGem);

    function addNewGem(e) {
        const formValues = Object.fromEntries(formElements.map(x => [x.id, x.value]))
        appendPreviewElement(formValues);
        addBtn.disabled = true;
        formElements.forEach(x => x.value = '');
    }

    function appendPreviewElement(elementData) {
        const li = document.createElement('li');
        li.className = 'gem-info';
        li.innerHTML = `
        <article>
            <h4>${elementData['gem-name']}</h4>
            <p>Color: ${elementData.color}</p>
            <p>Carats: ${elementData.carats}</p>
            <p>Price: ${elementData.price}$</p>
            <p>Type: ${elementData.type}</p>
        </article>
        <button class="save-btn">Save to Collection</button>
        <button class="edit-btn">Edit Information</button>
        <button class="cancel-btn">Cancel</button>`;
        previewContainer.appendChild(li);

        li.querySelector('.edit-btn').addEventListener('click', () => { edit(elementData, li) });
        li.querySelector('.save-btn').addEventListener('click', () => { save(elementData, li) });
        li.querySelector('.cancel-btn').addEventListener('click', () => { cancel(li) });
    }

    function appendCollectionElement(elementData) {
        const li = document.createElement('li');
        li.innerHTML = `<p class="collection-item">${elementData['gem-name']} - Color: ${elementData.color}/ Carats: ${elementData.carats}/ Price: ${elementData.price}$/ Type: ${elementData.type}</p>`;
        collectionContainer.appendChild(li);
    }

    function edit(elementData, li) {
        formElements.forEach((x) => {
            x.value = elementData[x.id];
        });
        li.remove();
        addBtn.disabled = false;
    }

    function save(elementData, li) {
        appendCollectionElement(elementData);
        li.remove();
        addBtn.disabled = false;
    }

    function cancel(li) {
        li.remove();
        addBtn.disabled = false;
    }
}
