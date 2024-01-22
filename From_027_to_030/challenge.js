/*
    All solutions must be in one chain
    Using concatenation is allowed
*/

let a = "Elzero Web School";

// Include this methods in your solution (slice, charAt)
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); //Zero



// 8 times of letter "H"
console.log(a.slice(-4, -3).toUpperCase().repeat(8));



// Return an array
console.log(a.split(" ", 1)); // [Elzero]



// Use only "substr" method + Template Literals in your solution
console.log(`${a.substr(0, 6)} ${a.substr(11)}`)



// Solution must be dynamic and string may change
console.log(a.substring(0, 1).toLowerCase() + a.slice(1, -1).toUpperCase() + a.substr(-1).toLowerCase()); // eLZERO WEB SCHOOl