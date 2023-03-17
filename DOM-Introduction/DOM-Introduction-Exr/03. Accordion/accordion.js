function toggle() {
    let button = document.querySelector('.button'); // get element by css selector [.name] -> for classes || [#name] -> for id's

    let text = document.querySelector('#extra');

    if(button.textContent === 'More') {
        button.textContent = 'Less';
        text.style.display = 'block';
    } else {
        button.textContent = 'More';
        text.style.display = 'none';
    }
}