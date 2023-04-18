/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 10: Write a function that checks if a given number is positive or negative.
*/

function positiveOrNegative (number) {
    if (number > 0) {
        return "Number is positive."
    } else if (number < 0) {
        return "Number is negative."
    }
}

console.log(positiveOrNegative(-8));