const isSymmetric = require('../05CheckForSymmetry');
const { assert } = require('chai');

describe('Test function that chek wether array is symmetryc', () => {
    //Positive tests
    it('Test with symmetryc array of numbers, should return true', () => {
        assert.equal(isSymmetric([1, 2, 1]), true);
    });
    it('Test with symmetryc array of strings, should return true', () => {
        assert.equal(isSymmetric(['1', '2', '1']), true);
    });
    it('Test with symmetryc array of numbers, should return true', () => {
        assert.equal(isSymmetric([1, 2, 1]), true);
    });
    it('Test array of one element, should return true', () => {
        assert.equal(isSymmetric(['SoftUni']), true);
    });
    it('Test with empty array, should return true', () => {
        assert.equal(isSymmetric([]), true);
    });
    it('Test with symmetryc array of arrays, should return true', () => {
        assert.equal(isSymmetric([[1, 2, 1, 2], [1, 2, 1, 2]]), true);
    });
    //Negative tests
    it('Test with two parameter that not array, should return false', () => {
        assert.equal(isSymmetric(1, 2), false);
    });
    it('Test with parameter that not array, should return false', () => {
        assert.equal(isSymmetric('SoftUni'), false);
    });
    it('Test with not-symmetryc array of strings, should return false', () => {
        assert.equal(isSymmetric(['1', '2', '1', 'SoftUni']), false);
    });
});