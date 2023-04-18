/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 3: Write a program that takes two numbers as input, and then logs the larger number to the console. 
    (Escriba un programa que tome dos números como entrada y luego muestre el número más grande en la consola.)
*/

function twoNumbers (value1, value2) {
    if (value1 > value2) {
        return `${value1} is larger.`;
    } return `${value2} is larger.`
}

console.log(twoNumbers(10, 15));