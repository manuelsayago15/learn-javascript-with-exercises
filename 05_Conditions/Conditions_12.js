/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 12: Create a function that checks if a given string is longer than 10 characters.
*/

function isLonger (string) {
    if (string.length > 10) {
        return `${string} is longer than 10 characters`;
    } else {
        return `${string} is not longer than 10 characters.`
    }
}
console.log(isLonger("JavaScript"));