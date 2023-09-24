function solve(input) {
    let isMagic = true;
    let rowSum = 0;
    let colSum = 0;

    input.forEach((arr, i) => {
        if(i == 0) {
            arr.forEach((num, j) => {
                rowSum += num;
                colSum += input[j][i];
            });

            if(rowSum != colSum){
                isMagic = false;
            }
        } else {
            let currRowSum = 0;
            let currColSum = 0;

            arr.forEach((num, j) => {
                currRowSum += num;
                currColSum += input[j][i];
            });

            if(currRowSum != currColSum || currRowSum != rowSum){
                isMagic = false;
            }
        }
    });

    return isMagic;
}

console.log(solve([[1, 0, 0],
    [0, 1, 0]]));