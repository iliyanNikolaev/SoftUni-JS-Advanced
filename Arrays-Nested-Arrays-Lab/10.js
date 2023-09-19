function solve(input) {
    let first = 0;
    let second = 0;

    input.forEach((x, i) => {
        first += x[i];
        second += x.reverse()[i];
    });

    console.log(`${first} ${second}`);
}

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);