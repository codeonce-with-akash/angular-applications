let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for(let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}

console.log("------------------------");

//let's use the simplied for
for(let tempSport of sportsOne) {
    if(tempSport == 'Cricket') {
        console.log(tempSport + " << my favorite!")
    }
    else {
        console.log(tempSport);
    }
}

console.log("--------------------");