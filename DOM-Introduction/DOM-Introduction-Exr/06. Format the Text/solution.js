function solve() {
  
  let inputElement = document.getElementById('input');

  let sentencesArr = inputElement.value.split('.').filter(s => s !== '');

  let outputElement = document.getElementById('output');

  while(sentencesArr.length > 0) {
    let text = sentencesArr.splice(0, 3).join('. ') + '.';

    let p = document.createElement('p'); // create new HTML element

    p.textContent = text;

    outputElement.appendChild(p); // positioning created element to DOM
  }
}