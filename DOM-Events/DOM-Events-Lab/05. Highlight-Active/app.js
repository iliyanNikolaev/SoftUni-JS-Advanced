function focused() {
    let inputElements = document.querySelectorAll('input[type="text"]');

    for (const input of inputElements) {
        
        input.addEventListener('focus', (e) => {
            let targetInputElement = e.target;

            let targetDivElement = targetInputElement.parentElement;
                targetDivElement.className = 'focused';
        });
        
        input.addEventListener('blur', (e) => {
            let targetInputElement = e.target;

            let targetDivElement = targetInputElement.parentElement;
                targetDivElement.className = 'blurred';
        });
    }
}
