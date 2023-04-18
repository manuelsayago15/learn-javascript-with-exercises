/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Even & Odd
    Exercise 2: Write a program that prompts the user to enter a number and then logs whether the number is even or odd to the console.
*/

function evenOrOdd () {
    const prompt=require("prompt-sync")({sigint:true}); 
    let number = prompt('Enter a number: ');
    return number % 2 === 0 ? `${number} is even.` : `${number} is odd.`;
}

console.log(evenOrOdd());