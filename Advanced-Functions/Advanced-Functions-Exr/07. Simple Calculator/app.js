function calculator() {
    // Инициализираме променливите тук, за да имат достъп до тях всички фунции в скоупа на 'calculator()'
    
    let elementOne; 
    let elementTwo; 
    let resultEl;

    function init(selector1, selector2, result){
        // Присвояваме на променливите референции към ДОМ елементи 
        // Селекторите на елементите идват от входните данни
        elementOne = document.querySelector(selector1); 
        elementTwo = document.querySelector(selector2); 
        resultEl = document.querySelector(result);
    }

    function add(){
        let num1 = Number(elementOne.value);
        let num2 = Number(elementTwo.value);

        resultEl.value = num1+num2;
    }

    function subtract(){
        let num1 = Number(elementOne.value);
        let num2 = Number(elementTwo.value);

        resultEl.value = num1-num2;
    }

    return { 
        init,
        add,
        subtract
    }
}

//ВХОД
const calculate = calculator (); // Инициализира се променлива calculate, на която се присвоява стойността върната от calculate();
// В случая стойността върната от calculate() e обект с методи, горните функции
calculate.init ('#num1', '#num2', '#result'); 





