/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Numbers
    Exercise 15: Write a function called addNumbers that takes in two strings representing numbers and returns their sum as a number.
*/

function addNumbers (string1, string2) {
    let number1 = Number.parseInt(string1, 10);
    let number2 = Number.parseInt(string2, 10);
    return number1 +  number2;
}

console.log(addNumbers("15","5"));