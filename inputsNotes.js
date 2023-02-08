const readLine= require ('readline-sync');

let answer = readLine.question("What day is it?\nYour answer: ");
console.log(answer);

let username = readLine.question("Enter username: ");
let password = readLine.question("Enter password: ");
if (password == "abc"){
    console.log(`Welcome ${username}`);
} else {
    console.log("invalid");
}

let currentPrice = readLine.question("Enter current price: ");
let originalPrice = readLine.question("Enter original price: ");
let diff = originalPrice-currentPrice;
let discount = (diff/originalPrice-currentPrice);
console.log(`discount ${discount}`);

let base = Number(readLine.question("Enter the base: "));
let exp = Number(readLine.question("Enter the exponent: "));
let answer2 = base ** exp;
console.log(`${base} to the power of ${exp} is ${answer2}`);

console.log(5.7);
console.log(Math.round(5.7));
console.log(5.3);
console.log(Math.round(5.3));
console.log(-5.3);
console.log(Math.round(-5.3));