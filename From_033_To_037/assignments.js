console.log(`\n===== The Assignments Solutions =====`);

// Assignment 1

// Test Case 1
let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

if (num < 10) {
    console.log(`00${num}`);
} else if (num >= 10 && num < 100) {
    console.log(`0${num}`);
} else {
    console.log(`${num}`);
}



// Assignment 2

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
/*
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
*/

if (num1 == str) {
    console.log(`${num1} is the same value as ${str} but not the same type`);
}

if (num1 == str && typeof num1 !== typeof str) {
    console.log(`${num1} is the same value as ${str} but not the same type`);
}

if (num1 !== str2) {
    console.log(`${num1} is not the same value or the same type as ${str2}`);
}

if (str !== str2) {
    console.log(`${str} is the same type as ${str2} but not the same value`);
}



// Assignment 3

let num2 = 10;
let num3 = 30;
let num4 = "30";

// Needed Output
/*
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
*/

if (num4 > num2 && typeof num4 != typeof num3) {
    console.log(`${num4} is greater than ${num2} and its type is not as the same of ${num3} type`);
}

if (num4 > num2 && num4 == num3 && num4 !== num3) {
    console.log(`${num4} is greater than ${num2} and value is the same as ${num3} and type is string not the same type of ${num3} which is number`)
}

if (num4 !== num2 && num4 !== num3) {
    console.log(`${num4} value and type are not the same as ${num2}, Also its type is not as same as ${num3}`)
}


// Assignment 4

// Edit What You Want Here

let num5 = 9;
let num6 = 6;
let num7 = 9;
let num8 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num5 > num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num5 > num6 && num5 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num5 > num6 && num5 === num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num5 + num6) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num5 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num5 + num6 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num8 - (num5 + num7) + num6 === 21) {
  console.log("True");
} else {
  console.log("False");
}