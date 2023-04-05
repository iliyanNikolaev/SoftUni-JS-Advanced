function carCompany(input) {
    let cars = {};

    while (input.length > 0) {
        let [brand, model, quantity] = input.shift().split(' | ');

        quantity = Number(quantity);

        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = { [model]: quantity };
        } else {
            
            if (!cars[brand].hasOwnProperty(model)) {
                cars[brand][model] = 0;
            }
            cars[brand][model] += quantity;
        }
    }

    for (const element in cars) {
        console.log(element);
        for (const model in cars[element]) {
            console.log(`###${model} -> ${cars[element][model]}`)
        }
    }
}

carCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);