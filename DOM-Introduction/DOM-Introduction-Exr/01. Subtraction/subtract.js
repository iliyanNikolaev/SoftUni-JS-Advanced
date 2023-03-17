function subtract() {
    const firstNumValue = document.getElementById('firstNumber').value;

    const secondNumValue = document.getElementById('secondNumber').value;

    const firstNum = Number(firstNumValue);
    const secondNum = Number(secondNumValue);

    const sum = firstNum - secondNum;

    document.getElementById('result').textContent = sum;
}