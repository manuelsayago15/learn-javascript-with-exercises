/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 5: Crea una función llamada "getFirstElement" que tome un array como parámetro y devuelva el primer elemento del mismo.
*/

function getFirstElement (array) {
    return array[0];
}

const array = ["React", "Angular", "JS", 20, true];
console.log(getFirstElement(array));