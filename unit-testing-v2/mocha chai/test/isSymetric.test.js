const isSymmetric = require('../isSymmetric');
const { expect } = require('chai');

describe('05. isSymetric tests', () => {
    it('Symmetric array of numbers, should return true', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('Symmetric array of strings, should return true', () => {
        expect(isSymmetric(['1', '2', '2', '1'])).to.be.true;
    });
    it('Array with 1 element, should return true', () => {
        expect(isSymmetric([1])).to.be.true;
    });
    it('Empty array, should return true', () => {
        expect(isSymmetric([])).to.be.true;
    });
    it('Empty object, should return false', () => {
        expect(isSymmetric({})).to.be.false;
    });
    it('Not symmetric array of numbers, should return false', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('Not symmetric array, strings, should return false', () => {
        expect(isSymmetric(['1', '2', '3'])).to.be.false;
    });
    it('Two arrays as params, strings, should return true', () => {
        expect(isSymmetric([['1', '2', '1'], ['1', '2', '1']])).to.be.true;
    });
    it('Not array param, should return false', () => {
        expect(isSymmetric('string')).to.be.false;
    });
    it('Without param, should return false', () => {
        expect(isSymmetric()).to.be.false;
    });
});