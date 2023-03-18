function generateReport() {
    let headTableElements = document.querySelectorAll('tr th input');

    let indexes = [];

    for (let i = 0; i < headTableElements.length; i++) {
            if(headTableElements[i]['checked'] === true) {
                indexes.push(i);
            }
    }

    let outputArr = [];

    let rowsTableElements = document.querySelectorAll('tbody tr');

    for (const row of rowsTableElements) {
        
        let tdElements = row.querySelectorAll('td');
        let obj = {};
        for(let i = 0; i < tdElements.length; i++) {
            if(indexes.includes(i)){
                obj[headTableElements[i].name] = tdElements[i].textContent;
            }
        }

        outputArr.push(obj);
    }

    let outputJSONarr = outputArr.map(obj => JSON.stringify(obj, null, ' '));

    let outputTextAreaElement = document.getElementById('output');

    outputTextAreaElement.textContent = '[\n' + outputJSONarr.join(',\n') + '\n]';
}