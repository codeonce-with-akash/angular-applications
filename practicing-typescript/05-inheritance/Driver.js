"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var myShape = new Shape_1.Shape(11, 33);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(10, 20, 40);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(0, 0, 7, 7);
console.log(myRectangle.getInfo());