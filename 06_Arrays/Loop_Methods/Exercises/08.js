/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 8: Escribe una función llamada getProductOfAllNumbers que reciba un array de números y devuelva el producto de todos los números del array.
*/

function getProductOfAllNumbers(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product = product * array[i];
    }
    return product;
}

const array = [2, 4, 5, 6, 9, 12];
console.log(getProductOfAllNumbers(array));