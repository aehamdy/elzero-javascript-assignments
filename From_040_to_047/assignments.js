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


/* ---------------  Assignment 4  --------------- */

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][website.length - website.length].slice(website.length).toUpperCase()); // ZERO

/* ------------------------------------------- */


/* ---------------  Assignment 5  --------------- */

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found");
} else {
    console.log("Not found");
}

/* ------------------------------------------- */


/* ---------------  Assignment 6  --------------- */

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [arr1.pop().toLowerCase(), arr2.pop().toLowerCase(), arr2.pop().toLowerCase()].sort().join("");

// Your Code Here

console.log(allArrs); // fxy