
// Write a script that asks for a day of the week. If the day is a business day, print 'go to work!'. If the day is a weekend day, print 'sleep in!'. If whatever the user entered is not a day, print 'enter a valid day'.

//This is number 1. Work or Sleep In 
let rawInput = 'sunday';

let sanitizedInput = rawInput.toLocaleLowerCase();
//sunday
if (sanitizedInput=== 'monday'
    || sanitizedInput === 'tuesday'
    || sanitizedInput === 'wednesday'
    || sanitizedInput === 'thursday'
    || sanitizedInput === 'friday')

    console.log ('Go To Work!')
        else if (sanitizedInput);
    

        
// let weekday =("Please enter a weekday")
// const expr = 'weekday';

// switch (weekday) {
//     case 'monday':
//     case 'tuesday':
//     case 'wednesday':
//     case 'tuesday':
//     case 'friday':
// console.log('Go To Work!');
// break;

// switch (weekend) {
//     case 'saturday':
//     case 'sunday':
// }
// console.log("Sleep in");
// break;

// default:
// console.log('You must enter a vaid day');
// break;
// }


//2. Secret Password

// let password=("Please enter your password: ");
// if(password== "Shineka"){
//     console.log("Welcome!");
// }
//     else { 
//         console.log("try again!");
//     }


// 3. Letter Grade
     
// const number =prompt("Please enter a number from 1 to 7");
// if(number== 1 == "Sunday" || number== 2== "Monday" || number== 3== "Tuesday" || number== 4== "Wednesday" || number== 5 =="Thursday" || number== 6 =="Friday" || number== 7 == "Saturday");{
//     console.log
// }
// {

// }

// 4. Write a script that asks for a score number between 0-100. Print the corresponding grade for that number. (i.e. <60 = F, <70 = D, <80 = C, <90 = B, 90+ = A). If the input is invalid, print an error message.

// console.log("Grade")

// let score = prompt("Please enter a number score from 0 - 100");
//     if(score >=90 && score <=100){
//         console.log("Grade: A");
// }
// else if (score <=90 && score >80){
//         console.log("Grade:B");

// }else if (score <=80 && score >70){
//     console.log("Grade: C");

// }else if (score <70){
//     console.log("Grade: D");
// }
// else{
//     console.log("Input is invalid");
// }

// 5. Picnic Game
//Write a script that asks the user for their name. Ask them for the food they are bringing to the picnic. Check if two input strings start with the same letter.  If it does, tell them they can come to the party. If it doesn't, tell them to try again.

// const prompt("Please enter your name");
// userName = userName.toLocaleLowerCase();

// let food = prompt("List the food item that you will bring to the picnic: ");
// food= food.toLocaleLowerCase();

// let firstName = userName.charAt(0);
// let firstFood = food.charAt(0);

// firstName === firstFood ? console.log("You are invited to my party"){
//     console.log("Please try again");
// }


//6. Username length validator
// Write a script that accepts a parameter username, and checks if the username is valid. A valid username must be longer than 3 characters and less than 18.

// 


// 7. Odd and Divisible by 3
// Write a script that asks the user for a number, then checks if the input number is odd and divisible by 3.

// let num = prompt("Please enter a number:  ");
// num%2!=0 && num%3===0 ? console.log(`${num} is odd and divisible by 3!`): console.log(`${num}` is NOT both odd and divisible by 3!);

// // 8. ## Uppercase or Lowercase?
// // Write a program that prompts the user for a letter and checks if it is uppercase or lowercase.

// let input ='aLetter'



// // 9. ## Convert Temperature
// // Write a program that prompts the user for a temperature in Fahrenheit and converts it to Celsius.

// let fahrenheit = prompt("Enter temperature degrees in Farenheit: ");
// let Celsius = (fahrenheit - 32) * (5/9);
// console.log(`${fahrenheit} degrees fahrenheit = ${celsius} degrees celsius.`);


// // 10. Tip Calculator
// Your task is to write a program that calculates how much of a tip to leave at a restaurant.

// Prompt the user for two things:

// The total bill amount
// The level of service, which can be one of the following: good, fair, or bad
// Calculate the tip amount and the total amount (bill amount + tip amount). The tip percentage based on the level of service is based on:

// good -> 20%
// fair -> 15%
// bad -> 10%


// let bill= prompt("Enter amount of your bill: ");
// bill = Number(bill);

// let serviceQuality = prompt("Rate the quality of you service ,poor, fair, good: ");
// let tip;
// serviceQuality = serviceQuality.toLocaleLowerCase( );
// switch(serviceQuality){
//     case 'good':
//         tip = 0.20;
//         break;
//     case 'fair':
//         tip = .15;
//     case 'poor';
//     tip = 0.10;
//     break;
// default:
//     console.log("Please enter a valid service rating!");
// }