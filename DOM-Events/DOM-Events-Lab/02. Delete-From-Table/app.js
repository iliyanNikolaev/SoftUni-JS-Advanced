function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');

    let targetEmail = inputElement.value;

    let emailCellsElements = document.querySelectorAll('tr td:nth-child(2)');

    let resultDivElement = document.getElementById('result');

    let isDeleted = false;

    for (const email of emailCellsElements) {

        if (email.textContent === targetEmail) {
            email.parentNode.remove();

            resultDivElement.textContent = 'Deleted.'

            isDeleted = true;
        }    
    }

    if(!isDeleted){
        resultDivElement.textContent = 'Not found.'
    }
}