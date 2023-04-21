/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 7: Crea una función llamada "addElement" que tome un array y un elemento como parámetros, 
    y añada el elemento al final del array. La función debe devolver el array modificado.
*/

function addElement (array, element) {
    array.push(element);
    return array;
}

const array = ["Code", "Games", "Zelda", "PS5"];
console.log(addElement(array, "Javascript"));