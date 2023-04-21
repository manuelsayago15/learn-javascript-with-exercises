/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 19: Crea una función llamada "sliceArray" que tome un array y dos índices como parámetros, 
    y devuelva un nuevo array que contenga los elementos del array original entre los dos índices 
    (incluyendo el elemento correspondiente al primer índice y excluyendo el elemento correspondiente al segundo índice).
*/

function sliceArray (array, index1, index2) {
    return array.slice(index1, index2);
}
const array = ["Vue", "JS", "SQL", "Angular", "Mongodb", "Kotlin"];
console.log(sliceArray(array, 2, 4));