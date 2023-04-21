/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 10: Crea una función llamada "isElementIncluded" que tome un array 
    y un elemento como parámetros, y devuelva true si el elemento está en el array, o false si no lo está.
*/

function isElementIncluded (array, element) {
    const findElement = array.find(item => element === item);
    if (findElement !== undefined) {
        return true;
    } return false;
}

const array = ["Vue", "Angular", "AI", "ChatGPT", "Kotlin"];
console.log(isElementIncluded(array, "hey"));