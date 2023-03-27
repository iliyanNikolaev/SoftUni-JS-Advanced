function getArticleGenerator(articles) {

    let container = document.getElementById('content'); // Взимаме елемента в който трябва да се наливат новите елементи

    /*Текст контента, който трябва да сетваме на елементите се съдържа в articles който е масив от стрингове и идва като вход на фунцията
     и е предварително инициализиран от авторите на задачата в HTML-a */

    //На бутон в HTML-a е сложен event който ще извиква фунцията която ретърнваме

    //Задачата е да добавяме article елементи в контейнера, докато елементите от масива не свършат

    return () => {
        if (articles.length > 0) {
            let newArticleEl = document.createElement('article'); //Създаваме нов article HTML елемент
            let text = articles.shift(); //Режем първия елемент от масива и го присвояваме като стойност на променливата text

            newArticleEl.innerText = text; //Сетваме текст контента на новия article елемент

            container.appendChild(newArticleEl); //Aпендваме новия елемент към контейнера
        }
    }
}
