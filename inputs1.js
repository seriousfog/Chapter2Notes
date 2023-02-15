const readLine = require("readline-sync");

//1
let answer = readLine.question("Do you want to hear a joke? ");
console.log(answer);
if (answer == "yes"){
    console.log("Why did the chicken cross the road? Because it wanted to get to the other side.")
    console.log("haha very funny")
} else {
    console.log("ok");
}
let work = readLine.question("Do you like my joke? ");
if (work == "yes"){
    console.log("thank you")
}


//2 and 3
const readLine = require ('readline-sync');

let poppy = Number(readLine.question("Enter a number: "));
let ion = Number(readLine.question("Lets try and divide by different numbers... "));
let answer = poppy % 2 == 0;
console.log(`${poppy} being divided by ${2} is ${answer}!`);{
    let answer2 = poppy % 3 == 0;
    console.log(`${poppy} being divided by ${3} is ${answer2}!`)
}{
    let answer3 = poppy % 4 == 0;
    console.log(`${poppy} being divided by ${4} is ${answer3}!`)
}
{
    let answer4 = poppy % 5 == 0;
    console.log(`${poppy} being divided by ${5} is ${answer4}!`)
}
{
    let answer5 = poppy % 6 == 0;
    console.log(`${poppy} being divided by ${6} is ${answer5}!`)
}


//4
let answer= readline.question("Choose a number between 1-10 \nYour Response: ")
console.log(answer);if (answer == "2")
{    console.log('You Won!')}else
{    console.log('Try Again')



//5
let cost = Number(readLine.question("Enter price: "));{
    if (cost <= 0)
        console.log('invalid')
}
let tax = cost * 0.08;
let newcost = cost + tax;
newcost = newcost.toFixed(2);
console.log(newcost)
