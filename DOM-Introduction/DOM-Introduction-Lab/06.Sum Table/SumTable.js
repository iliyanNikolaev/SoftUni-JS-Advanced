function sumTable() {
    let nums = document.getElementsByTagName('td')

    let sum = 0;

    for(let i = 0; i < nums.length - 2; i++) {
        if(i % 2 != 0){
            sum += Number(nums[i].textContent)   
        }
    }

    document.getElementById('sum').textContent = sum;
}