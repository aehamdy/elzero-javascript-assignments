/* Assignment 1 */

// Replace > With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0
console.log(+(10 > 20 > 15 > 3 > 190 > 10 > 400)); // 0


/* Assignment 2 */

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log((num - +true) * num); // 6

// Soultion Four
console.log(num ** (true + true) - num); // 6

// Solution Five
console.log(num + +true + +true + +true); // 6

// Solution Six
console.log((true + true) * num); // 6



/* Assignment 3 */

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log((true + true) * +num2); // 20

// Solution Three
console.log(Number(num2) + Number(num2)); // 20

// Solution Four
console.log(+num2++ + --num2); // 20



/* Assignment 4 */

let points = 10;

// Write Your Code Here

console.log(++points + true + true ); // 13

// Write Your Code Here

console.log(--points - true - true); // 8;