"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(10, 20, 40);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 7, 7);
//declare an array of shapes ... initially empty
var theShapes = [];
//add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShapes = theShapes_1[_i];
    console.log(tempShapes.getInfo());
    console.log("Area " + tempShapes.calculateArea());
    console.log();
}
