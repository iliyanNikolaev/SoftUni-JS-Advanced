function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function(){
    console.log(`${this.name} says Hi!`)
}

let person = new Person('Ilich', 25);

console.log(person);
person.sayHello()