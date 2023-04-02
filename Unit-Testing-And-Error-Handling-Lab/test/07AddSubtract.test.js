const createCalculator = require('../07AddSubtract');

const {expect} = require('chai');

describe('Test Add Substract Calculator function', () => {
    it('test with positive numbers', () => {
        let calc = createCalculator();

        calc.add(2);
        calc.add(2);
        calc.subtract(2);

        expect(calc.get()).to.equal(2);
    });

    it('test with negative numbers', () => {
        let calc = createCalculator();

        calc.add(-2);
        calc.add(-2);
        calc.subtract(-2);

        expect(calc.get()).to.equal(-2);
    });
    
    it('test with string', () => {
        let calc = createCalculator();

        calc.add('1');
        calc.add('1');
        calc.subtract('1');

        expect(calc.get()).to.equal(+1);
    });
});