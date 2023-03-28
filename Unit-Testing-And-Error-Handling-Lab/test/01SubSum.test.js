//const assert = require('chai').assert;
const expect = require('chai').expect;
const subSumTest = require('../01SubSum');

describe('SubSum Calculator', () => {
    it('Should calculate sub sum when endIndex is larger than array length', () => {
        let expectedSum = 150;
        let actualSum = subSumTest([10, 20, 30, 40, 50, 60], 3, 300);

        //assert.equal(actualSum, expectedSum);
        expect(actualSum).to.equal(expectedSum);
    });

    it('Should calculate sub sum when startIndex is lower than 0', () => {
        let expectedSum = 3.3000000000000003;
        let actualSum = subSumTest([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);

        //assert.equal(actualSum, expectedSum);
        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return NaN when in array has an element that is not a number', () => {
        let actualSum = subSumTest([10, 'twenty', 30, 40], 0, 2);

        //assert.equal(Number.isNaN(actualSum), true);
        expect(actualSum).to.be.NaN;
    });

    it('Should return 0 when array is empty', () => {
        let expectedSum = 0;
        let actualSum = subSumTest([], 1, 2);

        //assert.equal(actualSum, expectedSum);
        expect(actualSum).to.equal(expectedSum);
    });
});

