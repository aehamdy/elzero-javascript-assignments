// Assignment 1

let start = 10;
let end = 100;
let exclude = 40;

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// for (let i = start; i <= end; i+=10) {
//     if (i === 40) continue; else {console.log(i);}
// }

/* ========================================================= */

// Assignment 2

let start2 = 10;
let end2 = 0;
let stop2 = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// for (let i = start2; i >= end2; i--) {
    //     if (i === start2) {
        //         console.log(`${i}`);
        //     } else {
            //         console.log(`0${i}`);
//     }
//     if (i === 3) break;
// };


/* ========================================================= */

// Assignment 3

let start3 = 1;
let end3 = 6;
let breaker3 = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// for (let i = start3; i <= end3; i++) {
//     console.log(i);
//     console.log(`-- ${breaker3}\n-- ${breaker3*2}`);
// };


/* ========================================================= */

// Assignment 4

let index = 10;
let jump = 2;

// Output
// 10
// 8
// 6
// 4

// for (;;) {
//     console.log(index);
//   if (index === jump*2) break;
//   index -= jump;
// };


/* ========================================================= */

// Assignment 5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// let zero = friends.indexOf("Ahmed");
// let arr = [];

// for (let i = zero; i < friends.length; i++) {
    
    //     if (friends[i][zero].toLowerCase() === letter) {
        //         continue;
        //     } else {
//         arr.push(friends[i]);
//     };
// };

// for (let j = zero; j < arr.length; j++){
//     console.log(`${j} => ${arr[j]}`);
// };


/* ========================================================= */

// Assignment 6

let start5 = 0;
let swappedName = "elZerO";

// Output
// "ELzERo"

// let newName = swappedName.split("");
// let newArr = [];

// for (let i = start5; i < newName.length; i++) {
    //     if (newName[i] === newName[i].toLowerCase()) {
//         newArr.push(newName[i].toUpperCase());
//     } else {
    //         newArr.push(newName[i].toLowerCase());
    //     };
// };


/* ========================================================= */

// Assignment 7

let start6 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2
// 3
// 4

for (let i = start6; i < mix.length; i++) {
    if (mix[i] === +true || typeof mix[i] === "string") {
            continue;
        } else {
    console.log(mix[i]);
};
};