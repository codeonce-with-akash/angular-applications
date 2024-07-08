import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(11,33);
console.log(myShape.getInfo());

let myCircle = new Circle(10, 20, 40);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 7, 7);
console.log(myRectangle.getInfo());

