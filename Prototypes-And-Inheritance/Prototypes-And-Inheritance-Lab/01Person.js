function createPerson(firstName, lastName) {
    
    let person = {
        firstName: firstName,
        lastName: lastName
    };
    
    Object.defineProperty(person, 'fullName', {
        enumerable: true,
        configurable: true,
        get(){

            return person.firstName + ' ' + person.lastName;
        },
        set(value){

            [person.firstName, person.lastName] = value.split(' ');
        }
    });

    return person;
}
