var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("------------------------");
//let's use the simplied for
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == 'Cricket') {
        console.log(tempSport + " << my favorite!");
    }
    else {
        console.log(tempSport);
    }
}
