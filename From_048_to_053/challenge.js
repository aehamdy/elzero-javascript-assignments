let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let adminsCount = 0;

for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    } else {
        adminsCount++;
    }
};

document.write(`<div>We have ${adminsCount} admins</div> \n <hr>`);

for (let i = 0; i < adminsCount; i++) {
    document.write(`<div>The admin of team ${i+1} is <strong>${myAdmins[i]}</strong></div>`);
    document.write(`<h3>The team members are:</h3>`);
    let members = [];

    for (let j = 0; j < myEmployees.length; j++) {

        if (myAdmins[i][0] === myEmployees[j][0]) {
            members.push(myEmployees[j]);
        }
    }
    
    for (let j = 0; j < members.length; j++) {

        document.write(`<p>${j+1}- ${members[j]}</p>`);
    }
    document.write(`<hr>`);
};