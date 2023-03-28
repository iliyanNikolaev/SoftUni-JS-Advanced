const subSumTest = require('./01SubSum');

function test() {
    let expectedOutput = 150;
    let actualOutput = subSumTest([10, 20, 30, 40, 50, 60], 3, 300);

    if(actualOutput === expectedOutput) {
        console.log('Correct')
    } else {
        console.log('Error')
    }
}

test();