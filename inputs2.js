const readLine = require("readline-sync");

//1
let first = Number(readLine.question("Enter your first number "));
let second = Number(readLine.question("Enter your second number "));
let answer = first + second;
console.log(`${first} + ${second} is ${answer}`);

//2
let first2 = Number(readLine.question("Enter your first number "));
let second2 = Number(readLine.question("Enter your second number "));
let answer2 = first2 - second2;
console.log(`${first2} - ${second2} is ${answer2}`);

//3
let first3 = Number(readLine.question("Enter your first number "));
let second3 = Number(readLine.question("Enter your second number "));
let answer3 = first3 * second3;
console.log(`${first3} x ${second3} is ${answer3}`);

//4
let first4 = Number(readLine.question("Enter your first number "));
let second4 = Number(readLine.question("Enter your second number "));
let answer4 = first4 / second4;
console.log(`${first4} divided by ${second4} is ${answer4}`);

//5
let first5 = Number(readLine.question("Enter your first number "));
let second5 = Number(readLine.question("Enter your second number "));
let answer5 = first5 % second5;
console.log(`${first5} % ${second5} is ${answer5} (remainder)`);

//6
let name = readLine.question("What is your first name? ");
let name2 = readLine.question("What is your last name? ");
console.log(`Hello ${name2} , ${name}!`);

//7
let firstname = readLine.question("What is your first name? ");
let lastname = readLine.question("What is your last name? ");
let profession = readLine.question("And finally what is your title? (Mr., Mrs., Ms., etc.) ");{
    if (profession == "Mr."){
        console.log(`Hello ${profession} ${firstname} ${lastname}!`);
    }
    if (profession == "Mrs."){
        console.log(`Hello ${profession} ${firstname} ${lastname}!`);
    }
    if (profession == "Ms."){
        console.log(`Hello ${profession} ${firstname} ${lastname}!`);
    }
    if (profession == "Dr."){
        console.log(`Hello ${profession} ${firstname} ${lastname}!`);
    }
}

//8
let streetnumber = readLine.question("What is your street number? ");
let streetname = readLine.question("What is your street name? ");
let streettype = readLine.question("What is your street type? ");
let city = readLine.question("What is your city? ");
let state = readLine.question("What is your state? ");
let zip = readLine.question("What is your zip code? ");
console.log(`${streetnumber} ${streetname} ${streettype}\n ${city}, ${state} ${zip}`)

