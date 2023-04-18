/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 13: Write a function that checks if a given number is even or odd.
*/

function evenOrOdd (number) {
    if (number % 2 === 0) {
        return `${number} is Even.`;
    } return `${number} is Odd.`;
}

console.log(evenOrOdd(19));