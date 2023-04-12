class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        } else {
            this.products.push({ productName: product, quantity: quantity });
            this.warehouseSpace -= spaceRequired;
        }

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        if (!this.products.some(el => el.productName === product)) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        let output = '';

        this.products.forEach(el => {
            if (el.productName === product) {

                if (minimalQuantity <= el.quantity) {
                    output = `You have enough from product ${product}.`;
                } else {
                    let diff = minimalQuantity - el.quantity;

                    el.quantity = minimalQuantity;

                    output = `You added ${diff} more from the ${product} products.`;
                }

            }
        });

        return output;
    }

    sellProduct(product) {
        if (!this.products.some(el => el.productName === product)) {
            throw new Error(`There is no ${product} in the warehouse.`);
        } else {

            this.products.forEach(el => {
                if (el.productName === product) {
                    el.quantity--;

                    this.sales.push({ productName: el.productName, quantity: 1 })
                }
            });
        }

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        let output = '';
        
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        } else {
            output += `You sold ${this.sales.length} products today!\n`;

            output += `Products in the warehouse:\n`;

            this.products.forEach((el, i) => {
                if (i === this.products.length - 1) {
                    output += `${el.productName}-${el.quantity} more left`;
                } else {
                    output += `${el.productName}-${el.quantity} more left\n`;
                }
            });
        }
        
        return output;
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


