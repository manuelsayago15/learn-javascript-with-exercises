/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions - Booleans
    Exercise 1: Define una función llamada isEven que reciba un número como parámetro y devuelva true si el número es par y false si es impar.
*/

function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } return false;
}
function isEvenTernary (number) {
    (number % 2 === 0) ?  true : false;
}

console.log(isEven(50));
console.log(isEvenTernary(5));