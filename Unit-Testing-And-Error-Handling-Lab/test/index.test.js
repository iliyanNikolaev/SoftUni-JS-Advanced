const sum = require('../index');
const { assert } = require('chai');

describe('Test sum of two numbers function', () => {
    it('Test with two numbers', () => {
        const expectedOutput = 3;

        assert.equal(sum(1, 2), 3);
    });
});

