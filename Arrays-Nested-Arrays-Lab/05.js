function solve(input) {
    const first = Math.min(...input);
    input.splice(input.indexOf(first), 1);
    const second = Math.min(...input);

    console.log(`${first} ${second}`);
}

solve([0, 0, 10, 4, 7, 3]);