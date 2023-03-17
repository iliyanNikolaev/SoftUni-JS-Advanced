function solve() {
    let text = document.getElementById('text').value;

    let convention = document.getElementById('naming-convention').value;

    let inputTextWords = text.split(' ');

    let resultText = '';

    switch(convention) {
        case 'Camel Case':
            inputTextWords.forEach((word, index) => {

                for(let i = 0; i < word.length; i++){

                    if(index === 0){
                        resultText += word[i].toLowerCase();
                    } else {

                        if(i === 0){
                           resultText += word[i].toUpperCase();
                        } else {
                            resultText += word[i].toLowerCase();
                        }
                    }
                }
            });
            break;
        case 'Pascal Case':
            inputTextWords.forEach(word => {

                for(let i = 0; i < word.length; i++) {
                    if(i === 0){
                        resultText += word[i].toUpperCase();
                    } else {
                        resultText += word[i].toLowerCase();
                    }
                }
            });
            break;
        default:
            resultText = 'Error!';
            break;
    }

    document.getElementById('result').textContent = resultText;
}