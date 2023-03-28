function getNumber() {
    let number = Math.random();

    if (number < 0.5) {
        throw new Error('Your number is too low!');
    }

    return Math.floor(number * 100);
}

function app() {
    try {
        let result = getNumber();
        console.log(result); 
    } catch (err) {
        console.log(err);
    }
}

app();

