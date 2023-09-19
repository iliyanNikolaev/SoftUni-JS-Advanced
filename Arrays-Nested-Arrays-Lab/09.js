function solve(input) {
    let biggest = Number.MIN_SAFE_INTEGER;

    input.forEach(arr => arr.forEach(x => x > biggest ? biggest = x : null));

    return biggest;
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );