let a = 1_00, b = 2_00.5, c = 1e2, d = 2.4;


// Find the smallest number in all variables and return integer
console.log(Math.trunc(Math.min(a, b, c, d)));


// Use variables a + d one time to get the needed output
// 10000
console.log(Math.pow(a, Math.trunc(d)));



// Get integer "2" from d variable using four different methods
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));



// Use variables b + d to get these values

// 66.67 => as a string
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));

// 67 => as a number
console.log(Math.round((Math.floor(b) / Math.ceil(d))))
// or
console.log(Math.ceil((Math.floor(b) / Math.ceil(d))))