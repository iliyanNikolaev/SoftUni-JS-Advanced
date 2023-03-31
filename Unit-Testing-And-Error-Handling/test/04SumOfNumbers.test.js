const sum = require('../04SumOfNumbers');

const { assert } = require('chai');

describe('Test calculating sum of the numbers in array function', () =>{
    it('Test with array of numbers', () => {
        assert.equal(sum([1, 2, 3]), 6);
    });
    it('Test with array of negative numbers', () => {
        assert.equal(sum([-1, -3, -4]), -8);
    });
    it('Test with array of numbers as a string', () => {
        assert.equal(sum(['1', '2', '3']), 6);
    });
    it('Test with array of strings, funcion should return NaN', () => {
        assert.equal(isNaN(sum(['SoftUni', 'JavaScript', 'NodeJS'])), true);
    })
});