let person = {
    name: 'ilich',
    age: 25
}

/*
Всяко свойство на обект (key-value pair) само по себе си също има свойства и те са булеви стойности. Свойствата на key-value pair от обект са следните:
enumerable - Когато е true, можем да достъпваме дадения kvp във for...in цикли, enumerable свойствата също така се ретърнват и от методи като Object.keys
writable - Когато е true, можем да променяме стойността на дадения kvp
configurable - Когато е true, дадения kvp може да се изтрие чрез метода delete...
value - това е стойността на дадения kvp
*/

const prop = Object.getOwnPropertyDescriptor(person, 'name'); // Метода getOwnPropertyDescriptor ни дава възможността да видим свойствата на даден k-v pair
console.log(prop); // {value: 'ilich', writable: true, enumerable: true, configurable: true}

Object.defineProperty(person, 'name', {value: 'ilich', writable: false, enumerable: false, configurable: true}); /* Метода defineProperty ни дава възможността да променим дадено свойство
на конкретен k-v pair, в случая тук променяме writable на false и enumerable на false*/
person.name = 'hahaha';
console.log(person); // {name: 'ilich', age: 25} // Стойността на name не се промени, защото сетнахме writable на false

for (const key in person) {
    console.log(key);
}

//Output: age // Ще се отпечата на конзолата само пропъртито age защото сетнахме enumerable на false


//--- Object.freeze() и Object.seal(); --- 

