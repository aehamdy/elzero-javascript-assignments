
// Assignment 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(1000 * 100); // 100000
console.log(Math.floor(100000.5)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.trunc(100000.9)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt("100000 Ten Thousand")); // 100000
console.log(10 ** 5); // 100000


// Assignment 2

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991



// Assignment 3

console.log("MAX_SAFE_INTEGER".length); // 16


// Assignment 4

let myVar = "100.56789 Views";

console.log(Math.trunc(parseInt(myVar))); // 100
console.log(Number(Number.parseFloat(myVar).toFixed(2))); // 100.57


// Assignment 5

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2



// Assignment 6

let flt = 10.4;

console.log(Number.parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10



// Assignment 7

console.log(Math.random()*4); // 0 || 1 || 2 || 3 || 4