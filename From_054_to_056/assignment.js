let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
// "1 => Sayed"
// "2 => Mahmoud"

let names = [];

while (index < friends.length) {
	if (typeof friends[index] === "string" && friends[index][counter].toLowerCase() !== "a") {
		names.push(friends[index]);
	}
	index++;
}

while (counter < names.length) {
    console.log(`${counter} => ${names[counter]}`);
    counter++;
}