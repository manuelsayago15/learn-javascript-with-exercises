/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 9: Write a program that prompts the user for their age, and then logs an appropriate message to the console based on whether they are a child (12 years or younger), 
    a teenager (between 13 and 19 years old), or an adult (20 years or older)
*/

let age = 105;
if (age <= 12) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if(age >= 20 && age <= 104 ) {
    console.log("You are an adult.");
} else {
    console.log("You are a vampire or you are dead.");
}