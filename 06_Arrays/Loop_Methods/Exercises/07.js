/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 7: Escribe una función llamada getLargestNumber que reciba un array de números y devuelva el número más grande encontrado en el array.
*/

function getLargestNumber(array) {
    let largest = array[0];
    const findlargest = array.forEach(item => {
        if (item > largest) {
            largest = item;
        }
    });
    return largest;
}

const array = [2, 4, 5, 6, 9, 12, 13, 54, 23, 90, 3];
console.log(getLargestNumber(array));