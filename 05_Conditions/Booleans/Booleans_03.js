/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions - Booleans
    Exercise 3: Define una función llamada isString que reciba un valor como parámetro y devuelva true si el valor es una cadena de texto y false si no lo es.
*/

function isString (value) {
    if (Number.isInteger(value) === true) {
        return true;
    } return false;
}

console.log(isString(15));