/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Even & Odd
    Exercise 1: Write a function that takes a number as input and returns a boolean indicating whether it's even or odd.
*/

function evenOrOdd (number) {
    return number % 2 === 0 ? `${number} is even.` : `${number} is odd.`
}

console.log(evenOrOdd(3));