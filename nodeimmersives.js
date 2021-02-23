// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(0);
const lastName = getInput(1);

console.log("---------------------------------------------------");
console.log("Hello " + firstName + " " + lastName + "! Thanks for using my app!");
console.log("Let's scream your name! " + firstName.toUpperCase() + " " + lastName.toUpperCase());
console.log("Now here are your initials! " + firstName[0] + "." + lastName[0] + ".")
console.log("Finally here is your new email address! " + firstName.toLowerCase() + "." + lastName.toLowerCase() + "@codeimmersives.com")
console.log("---------------------------------------------------");
