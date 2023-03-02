/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Basic Functions
    Exercise 3: Escribe una función que tome un número como argumento y devuelva su valor absoluto.
*/

function absoluteValue(number) {
    if (number < 0) {
        return -1*number;
    }
    return number
}

console.log(absoluteValue(-5));
console.log(absoluteValue(-15));
console.log(absoluteValue(10));
console.log(absoluteValue(0));