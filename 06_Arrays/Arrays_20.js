/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 20: Dada una matriz de números enteros, escribe una función que devuelva el número más grande de la matriz.
*/

function maxNumber (array) {
    const max = array.reduce((acc, val) => val > acc ? val : acc);
    return max;
}

const array = [4, 50, 26, 78, 99, 1000, 1001, 10001, 65, 100, 987];
console.log(maxNumber(array));