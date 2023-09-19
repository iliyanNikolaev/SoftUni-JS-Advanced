function solve(input) {
    const sorted = input.sort((a, b) => a - b);

    return sorted.slice(-Math.round(sorted.length / 2));
}

solve([4, 7, 2, 5]);
