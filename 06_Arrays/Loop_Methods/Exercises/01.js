/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 1: Escribe una función llamada getFirstPositiveNumber que reciba un array de números y 
    devuelva el primer número positivo encontrado en el array. Si no hay números positivos, la función deberá devolver undefined.
*/

function getFirstPositiveNumber (array) {
    const positiveNumber = array.find(item => item > 0);
    return positiveNumber;
}

const array = [-5, -3, -4, -5, -1, 0, -15, -11, -18, -29, -23, -54];
console.log(getFirstPositiveNumber(array));