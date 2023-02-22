const readLine = require('readline-sync');


//11
let answer = readLine.question("Do you want to quit? ");
while (answer != "y" && answer != "n"){
    console.log("invalid choice");
    answer = readLine.question("Do you want to quit? ");
}

//12
//let answer = readLine.question("Do you want to quit? ");
//while (answer != "y" && answer != "n" && answer != "Y" && answer != "N"){
    //console.log("invalid choice");
    //answer = readLine.question("Do you want to quit? ");
//}
//13
//let answer = readLine.question("Enter A, B , or C: ");
//while (answer != "A" && answer != "B" && answer != "C"){
    //console.log("invalid choice");
    //answer = readLine.question("Enter A, B , or C: ");
//}
//14
//let answer = readLine.question("Enter 1, 2 , or 3: ");
//while (answer != "1" && answer != "2" && answer != "3"){
    //console.log("invalid choice");
    //answer = readLine.question("Enter 1, 2 , or 3: ");
//}
//15
//let answer = readLine.question("Enter a number 1 - 10: ");
//while (answer != "0" && answer != "1" && answer != "2" && answer != "3" && answer != "4" && answer != "5" && answer != "6" && answer != "7" && answer != "8" && answer != "9" && answer != "10"){
    //console.log("invalid choice");
    //answer = readLine.question("Enter a number 1 - 10: ");
//}

//16
//let answer = readLine.question("Enter positive number: ");
//while (answer >= 0){
    //if(answer % 2 == 1){
        //console.log(answer);
    //}
    //else {console.log("invalid choice");
        //answer = readLine.question("Enter positive number: ");
    //}
//}

//17
//let answer = readLine.question("Enter negative number: ");
//while (answer >= 0){
    //if(answer % 2 == 0){
        //console.log(answer);
    //}
    //else {console.log("invalid choice");
        //answer = readLine.question("Enter negative number: ");
   //}
//}

//19  does not work!
//let answer = readLine.question("Enter a number 0-10 or 20-30: ");
//while (answer >=0 && answer <=10 && answer >=20 && answer <=30 ){
    //console.log("invalid choice");
    //answer = readLine.question("Enter a number 0-10 or 20-30: ");
//}