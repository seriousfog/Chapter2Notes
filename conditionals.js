

let y = 10;
if (y == 5){
    console.log("it's the number five");
}
console.log("end of program")



let z = 30;
if (z == 5){  //option 1 = 30, option 2 = any other number that does not equal 30

    console.log("option1");
} else {
    console.log("option2");
}
console.log("end of program");



let w = 20;
if (w == 20){
    console.log("option1");  //true
} else {
    console.log("option2");  //false
}
console.log("end of program")



let num1 = 100;
if (num1 == 10){
    console.log("it's 10");
} else if (num1 == 6) {  //two options
    console.log("it's 6");
} else {
    console.log("it's something else");
}
console.log("end of program");



let num2 = 0;
if (num2 == 10){
    console.log("equals 10");
} else if (num2>5) {  //says nothing because both is false
    console.log("greater than 5");
}
console.log("end of program");



let secret = 7;
if (secret % 7 == 0){
    console.log("divisible by 7");
}
if (secret > 10){
    console.log("greater than 10");
} else {
    console.log("not greater than 10");
}
console.log("end of program");


let password ="abc123";
if (password == "abc123") {
    console.log("Welcome!");
} if (password == ""){
    console.log("Enter a password")
} else {
    console.log("invalid password")
}
console.log("end of program")


let number = 100;
if (number % 2 == 0){
    console.log('${number} is even.');
}
if (number % 5 == 0){
    console.log('${number}) is divisible by 5.');
}
if (number % 10 == 0){
    console.log('${number} is divisible by 10');
}