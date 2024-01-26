/* ---------------  Assignment 1  --------------- */

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.length = num); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends);
/* ------------------------------------------- */


/* ---------------  Assignment 2  --------------- */

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.splice(1, 2)); // ["Eman", "Osama"]

/* ------------------------------------------- */


/* ---------------  Assignment 3  --------------- */

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
// let finalArr = arrTwo.pop().concat(arrOne.reverse()).concat(arrTwo);
let finalArr = arrTwo.slice(- arrTwo.length/arrTwo.length).concat(arrOne.reverse()).concat(arrTwo.reverse().slice(arrTwo.length / arrTwo.length, arrTwo.length));

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

/* ------------------------------------------- */