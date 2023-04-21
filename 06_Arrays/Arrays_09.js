/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 9: Crea una función llamada "indexOfElement" que tome un array y un elemento como parámetros, 
    y devuelva el índice del elemento en el array. Si el elemento no está en el array, la función debe devolver -1.
*/

function indexOfElement (array, element) {
    //const findElement = array.find(item => element === item);
    //console.log(findElement);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

const array = ["JS", "React", "AI", "ChatGPT", "Kotlin"];
console.log(indexOfElement(array, "AI"));