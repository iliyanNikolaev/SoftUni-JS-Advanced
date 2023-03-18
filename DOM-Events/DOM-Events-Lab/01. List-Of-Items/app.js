function addItem() {
    let inputElement = document.getElementById('newItemText');

    let text = inputElement.value;
    
    let newLiElement = document.createElement('li');
   
    newLiElement.textContent = text;

    let ulOutputElement = document.getElementById('items');

    ulOutputElement.appendChild(newLiElement);
}