class Hex{
    constructor(value){
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(input){
        if(typeof input === 'number'){
            let param = this.value + input;
            return new Hex(param);
        } else {
            let param = this.value + input.value;
            return new Hex(param);
        }
    }

    minus(input){
        if(typeof input === 'number'){
            let param = this.value - input;
            return new Hex(param);
        } else {
            let param = this.value - input.value;
            return new Hex(param);
        }
    }

    parse(hexNum){
        return parseInt(hexNum, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
