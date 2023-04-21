/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 8: Crea una función llamada "removeLastElement" que tome un array como parámetro, 
    elimine el último elemento del mismo y devuelva el array modificado.
*/

function removeLastElement (array) {
    array.pop();
    return array
}

const array = [2, 10, 12, true, "Sidon", "JS", "PHP"];
console.log(removeLastElement(array));