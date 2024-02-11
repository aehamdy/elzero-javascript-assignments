// Assignment One

function sayHello(theName, theGender) {
    // if (theGender === "Male") {
    //     console.log(`Hello Mr. ${theName}`);
    // } else if (theGender === "Female") {
    //     console.log(`Hello Ms. ${theName}`);
    // } else if (theGender === undefined) {
    //     console.log(`Hello ${theName}`);
    // }

    // another solution using ternary conditional operation
    let gender = "";
    theGender === "Male"
    ? gender = "Mr. "
    : theGender === "Female"
    ? gender = "Ms. "
    : gender = "";

    console.log(`Hello ${gender}${theName}`);
}

// Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"

/* ========================================================= */

// Assignment Two

function calculate(firstNum, secondNum, operation) {

    let message;

    secondNum === undefined
    ? message = `Second number is not found`
    : operation === "add" || operation === undefined
    ? message = firstNum + secondNum
    : operation === "subtract"
    ? message = firstNum - secondNum
    : operation === "multiply"
    ? message = firstNum * secondNum
    : message = "Something Wrong";

    console.log(message);
}

  // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600

/* ========================================================= */

// Assignment three

function ageInTime(theAge) {
    let months = theAge * 12, weeks = theAge * 48, days = theAge * 365, hours = days * 24, minutes = hours * 60, seconds = minutes * 60;

    if (theAge > 10 && theAge < 100) {
        console.log(`Your age in months is ${months} months, in weeks is ${weeks} weeks, in days is ${days} days, in hours is ${hours} hours, in minutes is ${minutes} minutes, in seconds is ${seconds} seconds`);
    } else {
        console.log("The age is out of range");
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months