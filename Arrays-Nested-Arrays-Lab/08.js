function solve(input) {
    return input
        .filter((x, i) => i % 2)
        .map(x => x * 2)
        .reverse()
        .join(' ')
}

// cool 1 row arrow solution
//(input) => input.filter((x, i) => i % 2).map(x => x * 2).reverse().join(' ')

solve([3, 0, 10, 4, 7, 3]);