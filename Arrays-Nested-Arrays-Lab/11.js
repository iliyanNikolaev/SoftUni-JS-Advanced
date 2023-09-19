function solve(input) {
    let matches = 0;

    input.forEach((x, i) => {
        x.forEach((y, j) => {
            if(i < input.length - 1 && y == input[i + 1][j]){
                matches++;
            }

            if (y == x[j + 1]) {
                matches++;
            }
        });
    });

    return matches;
}

console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));