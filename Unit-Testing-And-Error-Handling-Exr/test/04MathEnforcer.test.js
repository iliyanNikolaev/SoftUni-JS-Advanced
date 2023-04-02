const mathEnforcer = require('../04MathEnforcer');
const { expect } = require('chai');

describe('addFive', () => {
    it('return undefined for invoking method without params', () => {
        expect(mathEnforcer.addFive()).to.be.undefined;
    });
    it('return undefined for invalid param', () => {    
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive('SoftUni')).to.be.undefined;
    });
    it('return correct answer for positive integer', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
    });
    it('return correct answer for negative integer', () => {
        expect(mathEnforcer.addFive(-10)).to.equal(-5);
    });
    it('return correct answer for positive floating point number', () => {
        expect(mathEnforcer.addFive(2.5)).to.be.closeTo(7.5, 7.501);
    });
    it('return correct answer for negative floating point number', () => {
        expect(mathEnforcer.addFive(-7.5)).to.be.closeTo(-2.5, 2.501);
    });
});

describe('subtractTen', () => {
    it('return undefined for invoking method without params', () => {
        expect(mathEnforcer.subtractTen()).to.be.undefined;
    });
    it('return undefined for invalid param', () => {    
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen('SoftUni')).to.be.undefined;
    });
    it('return correct answer for positive integer', () => {
        expect(mathEnforcer.subtractTen(5)).to.equal(-5);
    });
    it('return correct answer for negative integer', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });
    it('return correct answer for positive floating point number', () => {
        expect(mathEnforcer.subtractTen(-2.5)).to.equal(-12.5);
    });
    it('return correct answer for negative floating point number', () => {
        expect(mathEnforcer.subtractTen(-7.5)).to.equal(-17.5);
    });
});

describe('sum', () => {
    it('return undefined for invoking method without params', () => {
        expect(mathEnforcer.sum()).to.be.undefined;
    });
    it('return undefined for invoking method with only one param', () => {
        expect(mathEnforcer.sum(3)).to.be.undefined;
    });
    it('return undefined for incorrect first param', () => {
        expect(mathEnforcer.sum([2], 2)).to.be.undefined;
        expect(mathEnforcer.sum({obj: 2}, 2)).to.be.undefined;
        expect(mathEnforcer.sum('String', 2)).to.be.undefined;
    });
    it('return undefined for incorrect second param', () => {
        expect(mathEnforcer.sum(2, [2])).to.be.undefined;
        expect(mathEnforcer.sum(2, {obj: 2})).to.be.undefined;
        expect(mathEnforcer.sum(2, 'String')).to.be.undefined;
    });
    it('return correct answer for positive and negative integer params', () => {
        expect(mathEnforcer.sum(2, 1)).to.equal(3);
        expect(mathEnforcer.sum(-2, 1)).to.equal(-1);
        expect(mathEnforcer.sum(1, -3)).to.equal(-2);
        expect(mathEnforcer.sum(-2, -1)).to.equal(-3);
    });
    it('return correct answer for positive and negative floating params', () => {
        expect(mathEnforcer.sum(2.5, 1.5)).to.equal(4);
        expect(mathEnforcer.sum(2.5, 1)).to.equal(3.5);
        expect(mathEnforcer.sum(-2.5, -1.5)).to.equal(-4);
        expect(mathEnforcer.sum(1.5, -3)).to.equal(-1.5);
        expect(mathEnforcer.sum(2, 1.5)).to.equal(3.5);
        expect(mathEnforcer.sum(2, -1.5)).to.equal(0.5);
    });
});
