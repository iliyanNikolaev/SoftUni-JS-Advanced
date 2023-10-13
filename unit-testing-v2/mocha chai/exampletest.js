const { expect } = require('chai');

describe('Test suite 1', () => {
    it('sum two positive numbers', () => {
        expect(3+8).to.equal(11, 'here is error message');
    });
});
