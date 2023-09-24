function solve(input) {
    return input.sort((a, b) => {
        if(a.length != b.length) {
            return a.length - b.length
        } else {
            return a.localeCompare(b);
        }
    }).join('\n');
}

console.log(solve(['alpha', 
'beta', 
'gamma']
));