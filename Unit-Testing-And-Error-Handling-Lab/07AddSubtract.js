function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}


let calc = createCalculator();

calc.add(-2)
calc.add(-2)
calc.subtract(-2)
console.log(calc.get())

module.exports = createCalculator;