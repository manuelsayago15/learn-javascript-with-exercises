/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Numbers
    Exercise 16: Write a function called multiplyNumbers that takes in two strings representing numbers and returns their product as a number.
*/

function multiplyNumbers(string1, string2) {
    let number1 = Number.parseFloat(string1, 10);
    let number2 = Number.parseFloat(string2, 10);
    return number1 * number2;
}

console.log(multiplyNumbers("7", "11"));