function solution() {
    let str = '';

    function append(inputStr){
        str += inputStr;
    }
    // remove first n chars from the string
    function removeStart(n){
        str = str.slice(n);
    }

    // remove last n chars from the string
    function removeEnd(n){
        str = str.slice(0, -n)
    }

    function print() {
        console.log(str);
    }

    let obj = {
        append,
        removeStart,
        removeEnd,
        print
    }

    return obj;
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


