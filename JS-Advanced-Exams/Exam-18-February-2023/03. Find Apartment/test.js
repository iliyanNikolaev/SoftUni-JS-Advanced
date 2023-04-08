const { expect } = require('chai');
const findNewApartment = require('.//findApartment');

describe('Tests', () => {
    describe('isGoodLocation Tests', () => {
        it('throw error for invalid first param', () => {
            expect(() => {
                findNewApartment.isGoodLocation({city: Sofia}, true); 
            }).to.throw();
        });
        it('throw error for invalid second param', () => {
            expect(() => {
                findNewApartment.isGoodLocation('Sofia', {value: true}); 
            }).to.throw();
        });
        it('return "This location is not suitable for you." for first param different by Sofia, Plovdiv, Varna', () => {
            expect(findNewApartment.isGoodLocation('Pleven', true)).to.equal('This location is not suitable for you.');
        });
        it('return "You can go on home tour!" for valid first param and second param true', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        });
        it('return "You can go on home tour!" for valid first param and second param false', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        });
    });

    describe('isLargeEnough Tests', () => {
        it('throw error for invalid first param', () => {
            expect(() => {
                findNewApartment.isLargeEnough('Sofia', 20); 
            }).to.throw();
        });
        it('throw error for invalid second param', () => {
            expect(() => {
                findNewApartment.isLargeEnough([20], 'string'); 
            }).to.throw();
        });
        it('throw error for first param - empty array', () => {
            expect(() => {
                findNewApartment.isLargeEnough([], 20); 
            }).to.throw();
        });
        it('return "50, 60, 70" for valid params', () => {
            expect(findNewApartment.isLargeEnough([50, 60, 70], 40)).to.equal('50, 60, 70');
        });
        it('return "60, 70" for valid params', () => {
            expect(findNewApartment.isLargeEnough([50, 60, 70], 55)).to.equal('60, 70');
        });
    });

    describe('isItAffordable Tests', () => {
        it('throw error for invalid first param(string)', () => {
            expect(() => {
                findNewApartment.isItAffordable('Sofia', 20); 
            }).to.throw();
        });
        it('throw error for invalid second param(string)', () => {
            expect(() => {
                findNewApartment.isItAffordable(20, 'Sofia'); 
            }).to.throw();
        });
        it('throw error for invalid first param(negative number)', () => {
            expect(() => {
                findNewApartment.isItAffordable(-20, 20); 
            }).to.throw();
        });
        it('throw error for invalid second param(negative number)', () => {
            expect(() => {
                findNewApartment.isItAffordable(20, -20); 
            }).to.throw();
        });
        it('return "You can afford this home!" for budget larger than price', () => {
            expect(findNewApartment.isItAffordable(1, 2)).to.equal('You can afford this home!');
        })
        it('return "You can afford this home!" for budget larger than price', () => {
            expect(findNewApartment.isItAffordable(2, 1)).to.equal("You don't have enough money for this house!");
        })
    });
});