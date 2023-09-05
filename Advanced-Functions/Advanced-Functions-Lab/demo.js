// function add(num1) {
//     return function (num2) {
//         return function (num3) {
//             console.log(num1 + num2 + num3);
//         }
//     }
// }

function add(num) {
    return function(num2){
        return function(num3) {
            console.log(num + num2 + num3);
        }
    }
}

//add(1)(2)(3); // curryng
 
// closure

function createCounter() {
    let counter = 0;

    function increment() {
        counter++;

        console.log(counter);
    }

    return increment;
}

const counter = createCounter();

counter();
counter();
counter();
counter();
counter();