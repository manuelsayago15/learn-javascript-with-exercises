/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 6: Crea una función llamada "getLastElement" que tome un array como parámetro y devuelva el último elemento del mismo.
*/

function getLastElement (array) {
    return array.at(-1);
}

const array = ["Link", "Zelda", "Kingdom"];
console.log(getLastElement(array));