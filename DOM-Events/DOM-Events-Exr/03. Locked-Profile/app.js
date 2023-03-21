function lockedProfile() {
    let buttonElements = Array.from(document.getElementsByTagName('button'));

    buttonElements.forEach(b => b.addEventListener('click', onClick));

    function onClick(e) {

        let parrentDivEl = e.currentTarget.parentElement;

        let profileIsUnlock = parrentDivEl.querySelector('input[value="unlock"]').checked;

        let hiddenDivEl = parrentDivEl.querySelector('div');

        if (profileIsUnlock) {

            if (e.currentTarget.textContent === 'Show more') {
                e.currentTarget.textContent = 'Hide it'
                hiddenDivEl.style.display = 'inline'
            } else {
                e.currentTarget.textContent = 'Show more'
                hiddenDivEl.style.display = 'none'
            }
        }
    }
}