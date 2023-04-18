/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Even & Odd
    Exercise 10: Write a program that prompts the user to enter a series of numbers, separated by commas. The program should then log whether each number is even or odd.
*/

const prompt=require("prompt-sync")({sigint:true}); 
let numbers = prompt('Enter five numbers separated by commas: ');

const values = numbers.split(',').map(item => Number.parseInt(item));
console.log(values);
values.forEach(value => {
    if (value % 2 === 0) {
        console.log(`${value} is even.`)
    } else {
        console.log(`${value} is odd.`)
    }
})