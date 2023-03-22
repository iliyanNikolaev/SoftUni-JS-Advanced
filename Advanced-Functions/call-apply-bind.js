function printName(param) {
    console.log(`Hello ${param}! My name is ${this.name}`);
}

printName('Megi'); // Output: "Hello Megi! My name is undefined" //NOTE: This is a global invokation

let contextObj = {
    name: 'Ilich'
}

//call method example
printName.call(contextObj, 'Boyana'); // Output: "Hello Boyana! My name is Ilich" //NOTE: Invoke using call

//apply method example
printName.apply(contextObj, ['Sonya']); // Output: "Hello Sonya! My name is Ilich"////NOTE: Invoke using apply

// bind method Example


let printNameBindMethod = printName.bind(contextObj, 'Borislava'); // NO OUTPUT;

printNameBindMethod(); // Hello Borislava! My name is Ilich