/*
 * Function Challenge
 */

function showDetails (a, b, c) {

    let data = [a, b, c], name, age, status;

    for (let i = 0; i <= data.length; i++) {
        typeof data[i] === "string"
        ? name = data[i]
        : typeof data[i] === "number"
        ? age = data[i]
        : typeof data[i] === "boolean"
        ? status = data[i]
        : undefined;
    }

    // another solution
    // typeof a === "string" ? name = a : typeof b === "string" ? name = b : name = c;
    // typeof a === "number" ? age = a : typeof b === "number" ? age = b : age = c;
    // typeof a === "boolean" ? status = a : typeof b === "boolean" ? status = b : status = c;

    console.log(`Hello ${name}, your age is ${age}, you're ${status === true ? "available for hiring" : "not available for hiring"}`);
}

showDetails("Osama", 34, true); // Hello Osama, your age is 38, you're available for hiring
showDetails(35, "Osama", true); // Hello Osama, your age is 38, you're available for hiring
showDetails(true, 36, "Osama"); // Hello Osama, your age is 38, you're available for hiring
showDetails(false, "Osama", 37); // Hello Osama, your age is 38, you're not available for hiring