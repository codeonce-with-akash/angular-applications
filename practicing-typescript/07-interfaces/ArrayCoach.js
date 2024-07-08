"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var FootballCoach_1 = require("./FootballCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myFootballCoach = new FootballCoach_1.FootballCoach();
var coaches = [];
coaches.push(myCricketCoach);
coaches.push(myFootballCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var tempCoach = coaches_1[_i];
    console.log(tempCoach.getWorkDetails());
}
