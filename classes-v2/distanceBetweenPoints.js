class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        return Math.sqrt(((point2.x - point1.x) ** 2) + ((point2.y - point1.y) ** 2));
    }
}


const p1 = new Point(0, 0);
const p2 = new Point(3, 4);
console.log(Point.distance(p1, p2));
