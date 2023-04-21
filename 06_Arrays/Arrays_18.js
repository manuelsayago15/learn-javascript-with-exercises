/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 18: Crea una función llamada "concatArrays" que tome dos arrays como parámetros, y devuelva un nuevo array que contenga todos los elementos de ambos arrays concatenados.
*/

function concatArrays (array1, array2) {
    return array1.concat(array2);
}

const array1 = [4, 50, 26, 78, 99, 1000, 1001, 10001, 65, 100, 987];
const array2 = ["Vue", "JS", "SQL", "Angular", "Mongodb", "Kotlin"];

console.log(concatArrays(array1, array2));