//Инициализация на клас
class Person {
    constructor(name, age){ // Създава се метод на класа с ключовата дума 'constructor'
        this.name = name;
        this.age = age;
    }
    sayHello(){ // Добавяме метод на класа, който ще е наличен за всички обекти произлезли от този клас
        console.log(`${this.name} says hello`)
    }
}

//Може да се създават инстанции на класа

const man = new Person('Iliyan', 25);
const woman = new Person('Sonya', 21);

/*При създаването на инстанция на класа, подаваме аргументите които сме описали в конструктора като параметри,
и които параметри ще се сетнат като пропъртита на новосъздадения обект*/ 
console.log(man); // Person { name: 'Iliyan', age: 25 }
console.log(woman); // Person { name: 'Sonya', age: 21 }

man.sayHello(); // Iliyan says hello
woman.sayHello(); // Sonya says hello

//Новосъздадените обекти са си обикновени обекти и могат да се манипулират динамично

man.age++;
woman.age++;

console.log(man); // Person { name: 'Iliyan', age: 26 }
console.log(woman); // Person { name: 'Sonya', age: 22 }

//Можем да проверим дали дадена инстанция е произлязла от даден клас
console.log(man instanceof Person); //true