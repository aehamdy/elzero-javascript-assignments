// Assignment One

function sayHello(theName, theGender) {
    // if (theGender === "Male") {
    //     console.log(`Hello Mr. ${theName}`);
    // } else if (theGender === "Female") {
    //     console.log(`Hello Ms. ${theName}`);
    // } else if (theGender === undefined) {
    //     console.log(`Hello ${theName}`);
    // }

    // another solution
    let gender = "";
    theGender === "Male" ? gender = "Mr. " : theGender === "Female" ? gender = "Ms. " : gender = "";
    console.log(`Hello ${gender}${theName}`);
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"