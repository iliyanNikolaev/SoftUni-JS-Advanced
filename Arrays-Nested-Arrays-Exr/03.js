function solve(input) {
    const output = [];

    input.forEach((x, i) => x == 'add' ? output.push(i + 1) : output.pop());

    output.length > 0 ? console.log(output.join('\n')) : console.log('Empty');
}

solve(['remove', 
'remove', 
'remove']);