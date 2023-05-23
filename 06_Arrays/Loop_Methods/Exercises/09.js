/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 9: Escribe una función llamada getSumOfOddNumbers que reciba un array de números y devuelva la suma de todos los números impares en el array.
*/

function getSumOfOddNumbers(array) {
    let sum = 0;
    const oddSum = array.forEach(item => {
        if (item % 2 !== 0) {
            sum += item;
        }
    });
    return sum;
}

const array = [2, 4, 5, 6, 9, 12, 11, 15];
console.log(getSumOfOddNumbers(array));