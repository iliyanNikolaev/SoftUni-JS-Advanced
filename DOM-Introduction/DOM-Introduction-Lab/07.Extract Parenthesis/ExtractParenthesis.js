function extract(content) {
    
    let pattern = /\((?<word>[A-Za-z ]+)\)/g;

    let element = document.getElementById(content);

    let matchedWords = [];

    let match = pattern.exec(element.textContent);

    while(match) {

        matchedWords.push(match.groups.word);

        match =  pattern.exec(element.textContent);
    }

    return matchedWords.join('; ');
}