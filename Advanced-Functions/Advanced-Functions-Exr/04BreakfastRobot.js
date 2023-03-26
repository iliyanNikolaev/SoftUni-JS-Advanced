function solution(){

    let robotStorage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    
    function controler(str){
        let tokens = str.split(' ');
        let instruction = tokens[0];


        switch(instruction){
            case 'restock':
                let microelement = tokens[1];
                let quantityRestock = Number(tokens[2]);
                
                robotStorage[microelement] += quantityRestock;
                return 'Success'

            case 'prepare': 
                let recipe = tokens[1];
                let quantityPrepare = Number(tokens[2]);

                let neededProtein = 0;
                let neededCarbohydrates = 0;
                let neededFats = 0;
                let neededFlavour = 0;

                switch(recipe){
                    case 'apple':  
                         neededCarbohydrates = 1 * quantityPrepare;
                         neededFlavour = 2 * quantityPrepare;
                        break;
                    case 'lemonade': 
                        neededCarbohydrates = 10*quantityPrepare;
                        neededFlavour = 20*quantityPrepare;
                        break;
                    case 'burger': 
                        neededCarbohydrates = 5*quantityPrepare;
                        neededFats = 7*quantityPrepare;
                        neededFlavour = 3*quantityPrepare;
                        break;
                    case 'eggs': 
                        neededProtein = 5*quantityPrepare;
                        neededFats = 1*quantityPrepare;
                        neededFlavour = 1*quantityPrepare;
                        break;
                    case 'turkey':
                        neededProtein = 10*quantityPrepare;
                        neededCarbohydrates = 10*quantityPrepare;
                        neededFats = 10*quantityPrepare;
                        neededFlavour = 10*quantityPrepare; 
                        break;
                }
               
                if(robotStorage.protein >= neededProtein && robotStorage.carbohydrate >= neededCarbohydrates && robotStorage.fat >= neededFats && robotStorage.flavour >= neededFats){

                    robotStorage.protein -= neededProtein;
                    robotStorage.carbohydrate -= neededCarbohydrates;
                    robotStorage.fat -= neededFats;
                    robotStorage.flavour -= neededFlavour;

                    return 'Success'
                } else {
                    let ingredient = '';
                    if(robotStorage.protein < neededProtein){
                        ingredient = 'protein'
                    } else if(robotStorage.carbohydrate < neededCarbohydrates){
                        ingredient = 'carbohydrate'
                    } else if(robotStorage.fat < neededFats){
                        ingredient = 'fat'
                    } else {
                        ingredient = 'flavour'
                    }

                    return `Error: not enough ${ingredient} in stock`
                }

            case 'report':
                return  `protein=${robotStorage.protein} carbohydrate=${robotStorage.carbohydrate} fat=${robotStorage.fat} flavour=${robotStorage.flavour}`;
                
        }
    }

    return controler;
}

let manager = solution (); 
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("report")); 



