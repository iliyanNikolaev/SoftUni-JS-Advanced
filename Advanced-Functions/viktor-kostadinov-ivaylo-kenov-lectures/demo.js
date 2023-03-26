function sayHello() {
    return 'Hello, '
}

function myFunc(func, str) {

    return func() + str;
}

function anotherFunc(str) {

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

let result = myFunc(sayHello, 'world!');

console.log(result)

anotherFunc(myFunc(sayHello, 'world!'));

/*-----------------DEMO------------------*/

console.log('-----DEMO-----')

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

let myResult = multiply(add(1, 2), 3);//9

console.log(myResult)

console.log('-----DEMO-----');





function meow() {
    console.log(`Meow ${this.name}`)
}

let cat = {
    name: 'Siso',
}

let someVar = 10;

function closure() {
    let counter = 0;

    return () => {
        counter++;

        console.log(counter);
        
        console.log(cat.name);

        console.log(someVar)
    }
}


let counter = closure();

counter();
counter();
counter();
counter();

let expr = function(){
    console.log('something');
}();




