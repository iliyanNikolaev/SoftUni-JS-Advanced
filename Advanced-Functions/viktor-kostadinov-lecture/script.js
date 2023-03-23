function printContext(){

    console.log(this);
}

//printContext(); this === global Object in NodeJS / this === 'window' Object in browser

let obj = {
    justVariable: 'justValue',
//    printContext
}

//obj.printContext(); // { justVariable: 'justValue', printContext: [Function: printContext] } // this === obj


//document.querySelector('button').addEventListener('click', printContext);


printContext.apply(obj); // { justVariable: 'justValue' }