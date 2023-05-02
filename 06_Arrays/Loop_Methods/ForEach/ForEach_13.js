/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 13: Iterar sobre un array de números y mostrar solo los que estén entre dos valores determinados.
*/

function getValuesBetween (array, number1, number2) {
    const result = [];
    const values = array.forEach(item => {
        if (item > number1 && item < number2) {
            result.push(item);
        }
    })
    return result;
}

const array = [5, 26, 33, 15, 5, 23, 12, 8, 17, 25];
console.log(getValuesBetween(array, 10, 20));