class Person {
    constructor(firstName, lastName, age, email){
        if(typeof age !== 'number'){
            throw new TypeError('age must be integer')
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

const myPerson = new Person('Iliyan', 'Nikolaev', 25, 'ilichviva@gmail.com');

console.log(myPerson.toString());