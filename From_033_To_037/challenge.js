console.log(`\n===== The Challenge Solution =====`);

// Challenge 1  -  If Challenge

let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 to 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : "Unknown";



// Challenge 2

let st = "Elzero Web School";

if ( (st.length*2).toString() === "34") {
    console.log("Good");
}

if (st !== "string") {
    console.log("Good");
}

if (typeof st.length === "number") {
    console.log("Good");
}

if (st.split(" ", 1).toString().repeat(2) === "ElzeroElzero") {
    console.log("Good");
}

