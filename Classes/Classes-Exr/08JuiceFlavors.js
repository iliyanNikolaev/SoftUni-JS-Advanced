function juiceFlavors(input){
    let inputDataStore = {};
    let bottles = {};

    while(input.length > 0){

        let [fruit, quantity] = input.shift().split(' => ');
        quantity = Number(quantity);
        if(!inputDataStore.hasOwnProperty(fruit)){
            inputDataStore[fruit] = 0;
        }

        inputDataStore[fruit] += quantity;

        if(inputDataStore[fruit] >= 1000){
            if(!bottles.hasOwnProperty(fruit)){
                bottles[fruit] = 0;
            }

            bottles[fruit] += Math.floor(inputDataStore[fruit]/1000);
            
            inputDataStore[fruit] = inputDataStore[fruit] % 1000;
        }
    }

    for (const fruit in bottles) {
        console.log(`${fruit} => ${bottles[fruit]}`);
    }
}

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);