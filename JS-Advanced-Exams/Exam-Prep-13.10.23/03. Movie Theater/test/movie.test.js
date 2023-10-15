const { expect } = require('chai');
const movieTheater = require('../03. Movie Theater');

describe('movieTheater tests', () => {

    describe('method ageRestrictions', () => {
        it('param - "G"', () => {
            const result = movieTheater.ageRestrictions('G');

            expect(result).to.be.equal('All ages admitted to watch the movie');
        });
        it('param - "G"', () => {
            const result = movieTheater.ageRestrictions('G');

            expect(result).to.be.equal('All ages admitted to watch the movie');
        });
        it('param - "PG"', () => {
            const result = movieTheater.ageRestrictions('PG');

            expect(result).to.be.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        });
        it('param - "R"', () => {
            const result = movieTheater.ageRestrictions('R');

            expect(result).to.be.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        });
        it('param - ""NC-17"', () => {
            const result = movieTheater.ageRestrictions('NC-17');

            expect(result).to.be.equal('No one under 17 admitted to watch the movie');
        });
        it('otherwise', () => {
            const result = movieTheater.ageRestrictions('NY-City');

            expect(result).to.be.equal('There are no age restrictions for this movie');
        });
    });

    describe('method moneySpend', () => {
        it('valid inputs, total cost smaller than 50 bgn', () => {
            const result = movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water']);

            expect(result).to.be.equal('The total cost for the purchase is 29.50');
        });
        it('valid inputs, total cost bigger than 50 bgn, apply discount', () => {
            const result = movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], ['Soda', 'Water']);

            expect(result).to.be.equal('The total cost for the purchase with applied discount is 59.60');
        });
        it('invalid tickets count', () => {
            const badFn = () => movieTheater.moneySpent('This is NaN', ['Nachos', 'Popcorn'], ['Soda', 'Water']);
            expect(badFn).to.throw('Invalid input');
        });
        it('invalid food', () => {
            const badFn = () => movieTheater.moneySpent(2, { Nachos: 2 }, ['Soda', 'Water']);
            expect(badFn).to.throw('Invalid input');
        });
        it('invalid drinks', () => {
            const badFn = () => movieTheater.moneySpent(2, ['Nachos', 'Popcorn'], { Soda: 2 });
            expect(badFn).to.throw('Invalid input');
        });
    });
    describe('method reservation', () => {
        it('valid inputs', () => {
            const fn = () => movieTheater.reservation([{ rowNumber: 1, freeSeats: 2 }, { rowNumber: 2, freeSeats: 5 }], 4)
            expect(fn()).to.be.equal(2);
        });
        it('invalid rowsArray', () => {
            const badFn = () => movieTheater.reservation({ rowNumber: 1, freeSeats: 2}, 2);
            expect(badFn).to.throw('Invalid input');
        });
        it('invalid neededSeats - string', () => {
            const badFn = () => movieTheater.reservation([{ rowNumber: 1, freeSeats: 2 }, { rowNumber: 2, freeSeats: 5 }], 'invalid')
            expect(badFn).to.throw('Invalid input');
        });
    });
});