class Stringer{
    constructor(str, strLength){
        this.innerString = str,
        this.innerLength = strLength,
        this.initStr = str
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        this.innerLength -= length;

        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    toString(){
        if(this.innerLength < this.innerString.length){
            this.innerString = this.innerString.slice(0, this.innerLength) + '...'
        } else if(this.innerLength >= this.innerString.length){
            this.innerString = this.initStr;
        } else if(this.innerLength === 0){
            this.innerString = '...';
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
