function solve(input) {
    const output = [input.shift()];

    input.forEach(x => x >= output[output.length-1] && output.push(x))

    return output;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);