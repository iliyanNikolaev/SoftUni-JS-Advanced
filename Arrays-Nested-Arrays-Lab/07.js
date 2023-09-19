function solve(arr, first, end) {
    return arr.slice(arr.indexOf(first), arr.indexOf(end) + 1);
}

// cool 1 row arrow solution
// (arr, first, end) => arr.slice(arr.indexOf(first), arr.indexOf(end) + 1)

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));

