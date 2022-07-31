var prompt = require('prompt-sync')();

var C = prompt("Enter celsius between 0°C and 100°C : ");
var F = prompt("Enter celsius between 32°F and 212°F : ");


let randomCheck =( Math.floor(Math.random() * 10) % 2);

switch(randomCheck) {
    case 0: 
    let degF = (C * 9/5) + 32;
        console.log("celsius to fahreneheit is : " + degF);
        break;
    case 1:
        let degC = (F - 32) * 5/9;
        console.log("fahreneheit to celsius is : " + degC);
        break;
        
}