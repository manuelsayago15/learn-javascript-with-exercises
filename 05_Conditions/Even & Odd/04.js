/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Even & Odd
    Exercise 4: Write a function that takes an array of numbers as input and returns an array containing only the odd numbers.
*/

function numbers (array) {
    /*let odds = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i]);
        }
    }
    return odds;
    */

    const found = array.filter(number => number % 2 !== 0);
    return found;
}

let array = [3, 7, 14, 16, 18, 19, 23, 24, 21, 50, 52, 76, 99];
console.log(numbers(array));