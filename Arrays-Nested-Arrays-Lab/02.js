function solve(n, k) {
    const output = [1];

    for (let i = 1; i < n; i++) {
        let element = 0;

        i < k
            ? output.slice(0, i).forEach(x => element += x)
            : output.slice(-k).forEach(x => element += x)

        output.push(element);
    }

    return output;
}

solve(8, 2);