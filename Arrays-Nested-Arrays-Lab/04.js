function solve(input) {
    const output = [];

    input.forEach(x => x < 0 ? output.unshift(x) : output.push(x));

    console.log(output.join('\n'));
}

solve([7, -2, 8, 9]);