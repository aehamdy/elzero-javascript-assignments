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
//   ageInTime(110); // Age Out Of Range
//   ageInTime(38); // Months Example => 456 Months

/* ========================================================= */

// Assignment four

function checkStatus(a, b, c) {
    let name, age, status, message;
    let data = [a, b, c];

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "string") {
            name = data[i];
        } else if (typeof data[i] === "number"){
            age = data[i];
        } else if (typeof data[i] === "boolean") {
            status = data[i];
            status === true ? message = "you're available for hiring" : message = "you're not available for hiring";
        }
    }

    console.log(`Hello ${name}, your age is ${age}, and ${message}`);
}

// Needed Output
//   checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


/* ========================================================= */

// Assignment five

function createSelectBox(startYear, endYear) {
    document.write("<select>");
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value=${i}>${i}</option>`);
    }
    document.write("</select>");
}
createSelectBox(2000, 2021);



/* ========================================================= */

// Assignment six

function multiply(...args) {
    let result = 1;

    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === "number") {
            result *= parseInt(args[i]);
            // other solutions => Math.trunc(args[i]) or Math.floor(args[i])
        }
    }

    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000