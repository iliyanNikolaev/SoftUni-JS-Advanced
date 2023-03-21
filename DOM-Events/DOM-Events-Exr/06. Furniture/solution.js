function solve() {

  let [generateBtnElement, buyBtnElement] = document.querySelectorAll('button');

  let [inputTextAreaEl, outputTextAreaEl] = document.querySelectorAll('textarea');

  let tBodyElement = document.querySelector('tbody');

  generateBtnElement.addEventListener('click', (e) => {
    let inputData = JSON.parse(inputTextAreaEl.value);
    
    
    for (const inputDataObj of inputData) {
        tBodyElement.innerHTML += `<tr><td><img src=${inputDataObj.img}></td><td><p>${inputDataObj.name}</p></td><td><p>${inputDataObj.price}` + 
        `</p></td><td><p>${inputDataObj.decFactor}</p></td><td><input type="checkbox" /></td>`;
    }
});

  buyBtnElement.addEventListener('click', (e) => {
    let items = tBodyElement.querySelectorAll('tr td input');

    let totalPrice = 0;
    let totalFactor = 0;
    let itemNames = [];

    for (const item of items) {
        
        if(item.checked) {
            let parent = item.parentElement.parentElement;

            let tokens = parent.querySelectorAll('td')

            let name = tokens[1].textContent;
            let price = Number(tokens[2].textContent);
            let decFactor = Number(tokens[3].textContent);

            itemNames.push(name.trim());
            totalPrice += price;
            totalFactor += decFactor;
        }
    }

    let avgFactor = totalFactor / itemNames.length;

    outputTextAreaEl.textContent = `Bought furniture: ${itemNames.join(', ')}\n`;
    outputTextAreaEl.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputTextAreaEl.textContent += `Average decoration factor: ${avgFactor}`
  });
}