// function area() {
//     return Math.abs(this.x * this.y);
// };

// function vol() {
//     return Math.abs(this.x * this.y * this.z);
// };

// function solve(area, vol, input) {
    
//     let inputArr = JSON.parse(input);
    
//     let output = []
//     inputArr.forEach(el => {
        
//         output.push({
//             area: area.call(el),
//             volume: vol.call(el)
//         })
//     });

//     console.log(output);
// }

// function areaVol(areaFn, volFn, input){

//     let inputArr = JSON.parse(input);

//     inputArr.forEach(obj => {
//         console.log(`${areaFn.apply(obj)} <=> ${volFn.apply(obj)}`);
//     });
// }

// areaVol(area, vol, `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`
//     );


    //remastered

    function area() {
        return Math.abs(this.x * this.y);
    };
    
    function vol() {
        return Math.abs(this.x * this.y * this.z);
    };

    
    function newSolve(area, vol, input) {
        const arrOfObjects = JSON.parse(input);
        const newArr = [];

        arrOfObjects.forEach(element => {
            newArr.push({
                area: area.call(element),
                volume: vol.call(element)
            })
        });
    console.log(newArr);
    }

    newSolve(area, vol, `[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
        ]`)