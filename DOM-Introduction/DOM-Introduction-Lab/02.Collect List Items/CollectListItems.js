function extractText() {
    
    listItem = document.getElementsByTagName('li')
    let arr = [];

    for (const item of listItem) {
        arr.push(item.textContent)
    }

    document.getElementById('result').textContent = arr.join('\n')
}