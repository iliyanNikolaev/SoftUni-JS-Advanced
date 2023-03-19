function validate() {
    let inputFieldElement = document.getElementById('email');

    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;

    inputFieldElement.addEventListener('change', () => {
        if(inputFieldElement.value.match(pattern) === null){

            inputFieldElement.className = 'error'
        } else {
            inputFieldElement.removeAttribute('class');
        }
    });
}