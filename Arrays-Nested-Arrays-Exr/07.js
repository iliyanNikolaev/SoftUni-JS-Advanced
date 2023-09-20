function solve(input) {
    const output = [];
    const iterations = input.length;

    for(let i = 1; i <= iterations; i++) {
        if(i % 2==0) {
            const biggest = Math.max(...input);

            input.splice(input.indexOf(biggest), 1);

            output.push(biggest);
        } else {
            const smallest = Math.min(...input);

            input.splice(input.indexOf(smallest), 1);

            output.push(smallest);
        }
    }

    return output;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);