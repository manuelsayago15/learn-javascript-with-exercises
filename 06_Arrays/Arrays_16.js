/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 16: Crea una función llamada "findMin" que tome un array de números como parámetro, y devuelva el número más pequeño del array.
*/

function findMin (array) {
    let minNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}

const array = [1200, 50, 26, 78, 99, 1000, 1001, 2, 10001, 65, 100, 987, 3, 10, 1, 54, 45, 0, 89];
console.log(findMin(array));