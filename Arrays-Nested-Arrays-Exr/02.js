function solve(arr, n) {
    return arr.filter((x, i) => i == 0 || i % n == 0)
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2);