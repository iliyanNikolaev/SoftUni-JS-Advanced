const createCalculator = require('../createCalculator');
const { expect } = require('chai');

describe('createCalculator tests', () => {
    it('add 2 to sum', ()=>{
        const calc = createCalculator();
        calc.add(2);
        expect(calc.get()).to.equal(2);
    });
    it('substract 2', ()=>{
        const calc = createCalculator();
        calc.subtract(2);
        expect(calc.get()).to.equal(-2);
    });
    it('add 5 substract 2', ()=>{
        const calc = createCalculator();
        calc.add(5);
        calc.subtract(2);
        expect(calc.get()).to.equal(3);
    });
    it('add 5 into string substract 2 into string', ()=>{
        const calc = createCalculator();
        calc.add('5');
        calc.subtract('2');
        expect(calc.get()).to.equal(3);
    });
    it('add -6 subtract 2', ()=>{
        const calc = createCalculator();
        calc.add(-6);
        calc.subtract(2);
        expect(calc.get()).to.equal(-8);
    });
    it('no adding or subtracting', ()=>{
        const calc = createCalculator();
        expect(calc.get()).to.equal(0);
    });
    it('add string', ()=>{
        const calc = createCalculator();
        calc.add('string')
        expect(Number.isNaN(calc.get())).to.be.true;
    });
})