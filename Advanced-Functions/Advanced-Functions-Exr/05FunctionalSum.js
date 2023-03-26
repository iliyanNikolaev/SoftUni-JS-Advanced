function add(num){
    let sum = 0;

    function inner(num2){
        sum += num2;
        
        inner.toString = () => {
            return sum;
        }
        
        return inner;

    }

    return inner(num);
}

//console.log(add(1)(2)(3).toString()); // Output: 6

function anotherSolve(a){ //Същата функция с други имена на променливите за по-добро разбиране на проблема.

    let sum = 0; // Инициализираме променлива, която ще бъде запазена със стойността си в closure след първото извикване на функция 'anotherSolve'

    function innerFunc(b){//Декларираме вътрешна функция 'innerFunc', която ще извиква сама себе си, докато не бъде invoke-ната с метода 'stopMethod'
        sum += b;

        return innerFunc;
    }

    innerFunc.stopMethod = () => sum; // Присвояваме свойство(method) на функцията 'innerFunc', което да спре рекурсията когато бъде invoke-нато и да ни върне изчислената сума


    return innerFunc(a); 
    /* Връщаме вътрешната функция с първия аргумент за да започнем рекурсията, докато не бъде извикан метода 'stopMethod'
    рекурсията ще продължава да прибавя стойността на аргументите към променливата 'sum'*/
}

console.log(anotherSolve(1)(2)(3)('Some string for experiment').stopMethod()); // Output: 6Some string for experiment

