//Accessories
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(value){
        this.radius = value/2;
    }

    get area(){
        return Math.PI * this.radius**2;
    }
}

const myCircle = new Circle(4);
myCircle.diameter = 8;

console.log(myCircle.diameter);

console.log(myCircle.area);
