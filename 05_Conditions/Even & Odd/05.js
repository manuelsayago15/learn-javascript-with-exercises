/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Even & Odd
    Exercise 5: Write a program that prompts the user to enter a series of numbers, separated by commas. The program should then log how many of the numbers are even and how many are odd.
*/

const prompt=require("prompt-sync")({sigint:true}); 
let numbers = prompt('Enter five numbers separated by commas: ');
let even = 0;
let odd = 0;

const values = numbers.split(',').map(item => Number.parseInt(item));
console.log(values);
values.forEach(value => {
    if (value % 2 === 0) {
        even++;
    } else {
        odd++;
    }
})
console.log(`${even} are even.`);
console.log(`${odd} are odd.`);



/*const prompt=require("prompt-sync")({sigint:true}); 
let numbers = prompt('Enter five numbers separated by commas: ');
let numbersArray = [];
let even = 0;
let odd = 0;
const values = numbers.split(',');
console.log(values);

for (let i = 0; i < values.length; i++) {
    numbersArray.push(Number.parseInt(values[i]));
    if (Number.parseInt(values[i]) % 2 === 0) {
        even += 1;
    } else {
        odd += 1;
    }
}
console.log(numbersArray);

console.log(`${even} are even.`);
console.log(`${odd} are odd.`);
*/