const isOddOrEven = require('../02EvenOrOdd');
const {expect} = require('chai');

describe('Testing even or odd string length function', () => {
    it('return undefined for invalid param - array', () => {
        expect(isOddOrEven(['array', 'not', 'valid'])).to.be.undefined;
    });
    it('return undefined for invalid param - object', () => {
        expect(isOddOrEven({obj: 'isNotValidParam'})).to.be.undefined;
    });
    it('return undefined for invoking function without param', () => {
        expect(isOddOrEven()).to.be.undefined;
    });
    it('return odd for odd length string', () => {
        expect(isOddOrEven('haha')).to.equal('even');
    });
    it('return even for odd length string', () => {
        expect(isOddOrEven('hah')).to.equal('odd');
    });
});