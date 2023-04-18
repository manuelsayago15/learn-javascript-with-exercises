/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 14: Create a function that takes an array of numbers and returns the sum of all even numbers.
*/

function arrayEven (array) {
    let sum = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            sum+= array[i];
        }
    }
    return `${sum} is the result of the sum of all even numbers.`;
}

const array = [1, 23, 20, 12, 11, 7, 9, 90, 54, 15, 5, 4, 18, 100];
console.log(arrayEven(array));