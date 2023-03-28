function subSum(arr, start, end) {
    if(!Array.isArray(arr)){
        return NaN;
    }

    let startIndex = Math.max(start, 0);

    let endIndex = Math.min(end, arr.length - 1);

    let subArr = arr.slice(startIndex, endIndex + 1);

    let sum = subArr.reduce((ac, x) => ac += x, 0); 
    /* Метода reduce() минава по всеки от елементите на масив и трупа стойностите им в акумулатор,
    в случая 'ас' е акумулатора в който натрупваме сумата на числата (х) в масива, а тази 0 в края на масива е началната стойност
    на акумулатора
    */
    if(typeof sum !== 'number'){
        sum = NaN;
    }

    return sum;
}

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))

module.exports = subSum;
