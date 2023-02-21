const readLine = require('readline-sync');


let answer = readLine.question("Enter positive number: ");
while (answer != "10"{
    console.log("invalid choice");
    answer = readLine.question("Enter positive number: ");
}