function anotherSolve() {

    let arr = [];

    return function() {
        let firstNum = arr[arr.length - 2];
        
        if(firstNum == undefined){
            firstNum = 0;
        }

        let secondNum = arr[arr.length - 1];

        if(secondNum == undefined) {
            secondNum = 1;
        }

        let sum = firstNum + secondNum;

        arr.push(sum);

        return sum;
    }
}

function getFibonator() {

    let [a, b] = [0, 1];

    return () => {
       let c = a + b;

       a = b;
       b = c;

       return a;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
