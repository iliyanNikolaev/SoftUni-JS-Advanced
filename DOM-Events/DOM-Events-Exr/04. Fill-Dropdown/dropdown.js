function addItem() {
    let textFieldEl = document.getElementById('newItemText');

    let valueFieldEl = document.getElementById('newItemValue');

    let userText = textFieldEl.value;
    let userValue = valueFieldEl.value;
    if (userText !== '' && userValue !== '') {
        let selectEl = document.getElementById('menu');
        let newOptionEl = document.createElement('option');
        newOptionEl.textContent = userText;
        newOptionEl.value = userValue;

        selectEl.appendChild(newOptionEl);
    }

    textFieldEl.value = '';
    valueFieldEl.value = '';
}