/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 14: Crea una función llamada "multiplyArray" que tome un array de números como parámetro, y devuelva el producto de todos los números del array.
*/

function multiplyArray (array) {
    let total = 1;
    const multiplyNumbers = array.forEach(item => {
        total *= item;
    })

    return total;
}

const array = [5, 26, 33, 15, 5, 23, 7];

console.log(multiplyArray(array));