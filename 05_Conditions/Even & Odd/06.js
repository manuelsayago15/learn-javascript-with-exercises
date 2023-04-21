/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Even & Odd
    Exercise 6: Write a function that takes two numbers as input and returns the sum of all even numbers between them (inclusive).
*/

function evenSum (number1, number2) {
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(evenSum(4, 9));