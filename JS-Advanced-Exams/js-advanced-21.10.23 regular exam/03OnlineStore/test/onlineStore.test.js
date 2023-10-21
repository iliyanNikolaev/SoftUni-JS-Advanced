const { expect } = require('chai');
const onlineStore = require('../onlineStore.js');

describe('onlineStore tests', () => {

    describe('method isProductAvailable', () => {
        it('product is available', () => {
            const result = onlineStore.isProductAvailable('laptop', 3);

            expect(result).to.be.equal('Great! laptop is available for purchase.');
        });
        it('product is not available', () => {
            const result = onlineStore.isProductAvailable('laptop', 0);

            expect(result).to.be.equal('Sorry, laptop is currently out of stock.');
        });
        it('invalid first param', () => {
            const badFn = () => onlineStore.isProductAvailable({ invalid: 'this is invalid input' }, 0);
            expect(badFn).to.throw('Invalid input.');
        });
        it('invalid second param', () => {
            const badFn = () => onlineStore.isProductAvailable('laptop', { invalid: 'this is invalid input' });
            expect(badFn).to.throw('Invalid input.');
        });
    });

    describe('method canAffordProduct', () => {
        it('successful purchase', () => {
            const result = onlineStore.canAffordProduct(100, 200);

            expect(result).to.be.equal('Product purchased. Your remaining balance is $100.');
        });
        it('unsuccessful purchase', () => {
            const result = onlineStore.canAffordProduct(200, 100);

            expect(result).to.be.equal("You don't have sufficient funds to buy this product.");
        });
        it('invalid first param', () => {
            const badFn = () => onlineStore.canAffordProduct({ invalid: 'this is invalid input' }, 0);
            expect(badFn).to.throw('Invalid input.');
        });
        it('invalid second param', () => {
            const badFn = () => onlineStore.canAffordProduct('laptop', { invalid: 'this is invalid input' });
            expect(badFn).to.throw('Invalid input.');
        });
    });

    describe('getRecommendedProducts reservation', () => {
        it('recommended products exists', () => {
            const result = onlineStore.getRecommendedProducts([{ name: 'laptop', category: 'tech'}, {name: 'phone', category: 'tech' }], 'tech');

            expect(result).to.be.equal("Recommended products in the tech category: laptop, phone");
        });
        it('recommended products not exists', () => {
            const result = onlineStore.getRecommendedProducts([{ name: 'laptop', category: 'tech'}, {name: 'phone', category: 'tech' }], 'construction');

            expect(result).to.be.equal("Sorry, we currently have no recommended products in the construction category.");
        });
    });
    it('invalid first param', () => {
        const badFn = () => onlineStore.canAffordProduct({ invalid: 'this is invalid input' }, 'tech');
        expect(badFn).to.throw('Invalid input.');
    });
    it('invalid second param', () => {
        const badFn = () => onlineStore.canAffordProduct([{ name: 'laptop', category: 'tech'}, {name: 'phone', category: 'tech' }], { invalid: 'this is invalid input' });
        expect(badFn).to.throw('Invalid input.');
    });
});