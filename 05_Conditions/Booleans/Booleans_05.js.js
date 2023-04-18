/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions - Booleans
    Exercise 5: Define una función llamada isMultiple que reciba dos números como parámetros y 
    devuelva true si el segundo número es múltiplo del primero y false si no lo es.
*/

function isMultiple (number1, number2) {
    if (number2 % number1 === 0) {
        return true;
    } return false;
}

console.log(isMultiple(4, 2));

/*
function isMultiple(number1, number2) {
  return number2 % number1 === 0;
}
*/