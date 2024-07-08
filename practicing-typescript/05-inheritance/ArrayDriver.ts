import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(11,33);
let myCircle = new Circle(10, 20, 40);
let myRectangle = new Rectangle(0, 0, 7, 7);

//declare an array of shapes ... initially empty
let theShapes: Shape[] = [];

//add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShapes of theShapes) {
    console.log(tempShapes.getInfo());
}
