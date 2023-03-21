function encodeAndDecodeMessages() {
    let [encodeBtnEl, decodeBtnEl] = document.querySelectorAll('div button');

    let [encodeTextAreaEl, decodeTextAreaEl] = document.querySelectorAll('div textarea');

    encodeBtnEl.addEventListener('click', () => {

        let userMessage = encodeTextAreaEl.value;

        let decodedMessage = '';

        for (let i = 0; i < userMessage.length; i++) {

            let decodedAscii = userMessage[i].charCodeAt() + 1;
            decodedMessage += String.fromCharCode(decodedAscii);
        }

        decodeTextAreaEl.value = decodedMessage;

        encodeTextAreaEl.value = '';
    });

    decodeBtnEl.addEventListener('click', () => {

        let decodedMessage = decodeTextAreaEl.value;

        let encodedMessage = '';

        for (let i = 0; i < decodedMessage.length; i++) {

            let encodedAscii = decodedMessage[i].charCodeAt() - 1;
            encodedMessage += String.fromCharCode(encodedAscii);
        }

        decodeTextAreaEl.value = encodedMessage;
    });
}