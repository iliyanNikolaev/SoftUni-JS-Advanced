function solve(input) {
    const output = [];

    input.forEach((x, i) => i % 2 == 0 ? output.push(x) : null);

    console.log(output.join(' '));
}

solve(['20', '30', '40', '50', '60']);