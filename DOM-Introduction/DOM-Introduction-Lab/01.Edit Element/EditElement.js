function editElement(element, string, replacer) {
    while(element.textContent.includes(string)){
        element.textContent = element.textContent.replace(string, replacer);
    }
}