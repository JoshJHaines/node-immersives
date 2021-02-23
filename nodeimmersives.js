// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const first = getInput(0);
const last = getInput(1);

console.log("---------------------------------------------------");
console.log(first);
console.log(last);
console.log("Hello " + first + " " + last + "! Thanks for using my app!");
console.log(first.toUpperCase() + " " + last.toUpperCase());
console.log("---------------------------------------------------");
