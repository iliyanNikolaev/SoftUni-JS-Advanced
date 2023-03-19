function addItem() {
    let inputElement = document.getElementById('newItemText');

    let textFromUser = inputElement.value;

    let ulElement = document.getElementById('items');

    let newElement = document.createElement('li');

    newElement.textContent = textFromUser;

    let deleteLinkElement = document.createElement('a');

    deleteLinkElement.href = '#';

    deleteLinkElement.textContent = '[Delete]';

    deleteLinkElement.addEventListener('click', () => {

        deleteLinkElement.parentElement.remove();
    });


    newElement.appendChild(deleteLinkElement);

    ulElement.appendChild(newElement);

    inputElement.value = '';
}