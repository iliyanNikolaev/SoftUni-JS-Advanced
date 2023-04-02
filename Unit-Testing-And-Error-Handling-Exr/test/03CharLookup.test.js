const lookupChar = require('../03CharLookup');
const {expect} = require('chai');

describe('Testing lookup char function', () => {
    it('return undefined for incorrect first param', () => {
        expect(lookupChar([1, 2, 3], 5)).to.be.undefined;
    });
    it('return undefined for incorrect second param', () => {
        expect(lookupChar('SoftUni', 5.5)).to.be.undefined;
        expect(lookupChar('SoftUni', 'index')).to.be.undefined;
    });
    it('return "incorrect index" for second param (index) out of lower boud', () => {
        expect(lookupChar('SoftUni', -1)).to.equal('Incorrect index');
    });
    it('return "incorrect index" for second param (index) out of upper boud', () => {
        expect(lookupChar('SoftUni', 7)).to.equal('Incorrect index');
    });
    it('return correct answer for correct params', () => {
        expect(lookupChar('SoftUni', 6)).to.equal('i');
    });
});