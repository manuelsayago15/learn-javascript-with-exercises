/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Even & Odd
    Exercise 9: Write a function that takes a number as input and returns a boolean indicating whether it's a multiple of 3 or 5 (or both).
*/

function multiple (number) {
    if (number % 15 === 0) {
        return `${number} is multiple of 3 and 5. ` + 'Boolean: ' + true;
    } else if (number % 3 === 0) {
        return `${number} is multiple of 3. ` + 'Boolean: ' + true;
    } else if (number % 5 === 0) {
        return `${number} is multiple of 5. ` + 'Boolean: ' + true;
    }
}

console.log(multiple(30));