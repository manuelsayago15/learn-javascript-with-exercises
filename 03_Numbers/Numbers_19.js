/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Numbers
    Exercise 19: Write a function called divideNumbers that takes in two strings representing numbers and returns their quotient as a number.
*/

function divideNumbers (string1, string2) {
    let number1 = Number.parseFloat(string1, 10);
    let number2 = Number.parseFloat(string2, 10);
    return number1/number2;
}

console.log(divideNumbers("41", "7"));