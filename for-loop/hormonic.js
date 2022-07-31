var prompt = require('prompt-sync')();
var number = prompt("Enter the number : ");

var hormonic = 0;
for(let i = 1; i <= number; i++)
 {
    hormonic = 1/i + hormonic;
    console.log("Harmonic number of " + i + " is : " + hormonic);
 }