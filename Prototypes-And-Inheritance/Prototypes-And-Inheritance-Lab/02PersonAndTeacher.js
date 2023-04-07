function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name,
            this.email = email
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

let classes = personAndTeacher();

let master = new classes.Teacher('Ilicha', 'ilichviva@gmail.com', 'JS');

console.log(master);
