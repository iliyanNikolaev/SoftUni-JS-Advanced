const motorcycleRider = require('./Motorcycle Rider');
const { expect } = require('chai');

describe('Tests motorcycleRider' , () => {
    describe('Tests licenseRestriction', () => {
        it('throw error for invalid param', () => {
            expect(() => {
                motorcycleRider.licenseRestriction ('BG'); 
            }).to.throw();
        });

        it('return "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16." for param AM', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });

        it('return "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16." for param A1', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });

        it('return "Motorcycles with maximum power of 35KW. and the minimum age is 18." for param A2', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });

        it('return "No motorcycle restrictions, and the minimum age is 24." for param A', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
    });

    describe('Tests motorcycleShowroom', () => {
        it('throw error for invalid first param', () => {
            expect(() => {
                motorcycleRider.motorcycleShowroom ('BG', 20); 
            }).to.throw();
        });

        it('throw error for invalid second param', () => {
            expect(() => {
                motorcycleRider.motorcycleShowroom ([50, 75, 125], 'BG'); 
            }).to.throw();
        });

        it('throw error for first param - empty array', () => {
            expect(() => {
                motorcycleRider.motorcycleShowroom ([], 50); 
            }).to.throw();
        });

        it('throw error for second param - less than 50', () => {
            expect(() => {
                motorcycleRider.motorcycleShowroom ([50, 75, 125], 49); 
            }).to.throw();
        });

        it('return "There are 3 available motorcycles matching your criteria!" for valid params', () => {
            expect(motorcycleRider.motorcycleShowroom([50, 125, 250], 500)).to.equal('There are 3 available motorcycles matching your criteria!');
        });

        it('return "There are 0 available motorcycles matching your criteria!" for valid params', () => {
            expect(motorcycleRider.motorcycleShowroom([125, 250, 500], 50)).to.equal('There are 0 available motorcycles matching your criteria!');
        });
    });

    describe('Tests otherSpendings', () => {
        it('throw error for invalid first param', () => {
            expect(() => {
                motorcycleRider.otherSpendings ('BG', ['engine oil'], true); 
            }).to.throw();
        });

        it('throw error for invalid second param', () => {
            expect(() => {
                motorcycleRider.otherSpendings (['helmet'], 'BG', true); 
            }).to.throw();
        });

        it('throw error for invalid third param', () => {
            expect(() => {
                motorcycleRider.otherSpendings (['helmet'], ['engine oil'], 'BG'); 
            }).to.throw();
        });

        it('return "You spend $600.00 for equipment and consumables!" for valid params', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');
        });

        it('return "You spend $540.00 for equipment and consumables with 10% discount!', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
        });
    });
});

