class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Shape class cannot be instantiated directly.");
        }
    }

    area() {
        throw new Error("Area method must be implemented in child classes.");
    }

    perimeter() {
        throw new Error("Perimeter method must be implemented in child classes.");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// Square class (special case of Rectangle)
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

try {
    // This will throw an error, because Shape is not initializable
    const shape = new Shape();
} catch (error) {
    console.log(error.message);
}

const rectangle = new Rectangle(5, 10);
console.log("Rectangle area:", rectangle.area());
console.log("Rectangle perimeter:", rectangle.perimeter());

const square = new Square(5);
console.log("Square area:", square.area());
console.log("Square perimeter:", square.perimeter());

const circle = new Circle(5);
console.log("Circle area:", circle.area());
console.log("Circle perimeter:", circle.perimeter());