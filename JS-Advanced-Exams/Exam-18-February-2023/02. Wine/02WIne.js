class WineSelection {
    constructor(space){
        this.space = space,
        this.wines = [],
        this.bill = 0
    }

    reserveABottle(wineName, wineType, price){
        if(this.wines.length === this.space){
            throw new Error('Not enough space in the cellar.');
        } else {
            let wineObj = {
                wineName,
                wineType,
                price: Number(price),
                paid: false
            }
            this.wines.push(wineObj);
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }

    payWineBottle(wineName, price){
        if(!this.wines.some(el => el.wineName === wineName)){
            throw new Error(`${wineName} is not in the cellar.`)
        } else {
            this.wines.forEach(el => {
                if(el.wineName === wineName){
                    if(el.paid === true){
                        throw new Error(`${wineName} has already been paid.`)
                    } else {
                        el.paid = true;
                        this.bill += price;
                    }
                }
            });
        }
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName){
        if(!this.wines.some(el => el.wineName === wineName)){
            throw new Error("The wine, you're looking for, is not found.");
        } else {
            this.wines.forEach(el => {
                if(el.wineName === wineName){
                    if(el.paid === false){
                        throw new Error(`${wineName} need to be paid before open the bottle.`);
                    } else {
                        let indexForDelete = this.wines.indexOf(el);
                        this.wines.splice(indexForDelete, 1);
                    } 
                }
            });
        }
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType){
        let output = '';
        if(wineType === undefined){
            let emptySlots = this.space - this.wines.length;
            output += `You have space for ${emptySlots} bottles more.\n`;
            output += `You paid ${this.bill}$ for the wine.\n`;
            
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            this.wines.forEach((el, i)=> {
                let paidOrNot = '';

                if(el.paid){
                    paidOrNot = 'Has Paid';
                } else {
                    paidOrNot = 'Not Paid';
                }
                if(i === this.wines.length - 1){
                    output += `${el.wineName} > ${el.wineType} - ${paidOrNot}.`
                } else {
                    output += `${el.wineName} > ${el.wineType} - ${paidOrNot}.\n`
                }
            });

        } else {
            if(!this.wines.some(el => el.wineType === wineType)){
                throw new Error(`There is no ${wineType} in the cellar.`);
            } else {
                this.wines.forEach(el => {
                    if(el.wineType === wineType){
                        let paidOrNot = '';
                        if (el.paid) {
                            paidOrNot = 'Has Paid';
                        } else {
                            paidOrNot = 'Not Paid';
                        }
                        output = `${el.wineName} > ${el.wineType} - ${paidOrNot}.`
                    }
                });
            }
        }
        return output;
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());



