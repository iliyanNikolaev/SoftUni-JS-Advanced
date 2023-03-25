function solve() {
    
    let data = {};

    for (const arg in arguments) {
        let type = typeof arguments[arg];
        let argument = arguments[arg];
        console.log(`${type}: ${argument}`)
        
        if(!data.hasOwnProperty(type)){
            
            data[type] = []
        }

        data[type].push(argument);
    }

    let dataEntries = Object.entries(data);

    dataEntries
    .sort((kvp1, kvp2) => kvp2[1].length - kvp1[1].length)
    .forEach(el => console.log(`${el[0]} = ${el[1].length}`));
}

solve({ name: 'bob'}, 3.333, 9.999);

console.log('--------------')

function test() {
    let argsArr = Object.values(arguments);

    argsArr.forEach(element => {
        console.log(typeof element)
    });
}

test({ name: 'bob'}, 3.333, 9.999);
