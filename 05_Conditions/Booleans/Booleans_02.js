/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions - Booleans
    Exercise 2: Define una función llamada isPositive que reciba un número como parámetro y devuelva true si el número es positivo y false si es negativo.
*/

function isPositive (number) {
    if (number >= 0) {
        return `${number} is positive.`;
    } return `${number} is not positive.`;
}

console.log(isPositive(-1));