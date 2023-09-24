function solve(arr, rotations) {
    for(let i = 1; i <= rotations; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15	
);