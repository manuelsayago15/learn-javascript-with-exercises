/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 11: Crea una función llamada "reverseArray" que tome un array como parámetro, y devuelva un nuevo array con los elementos en orden inverso.
*/

function reverseArray (array) {
    return array.reverse();
    /*const newArray = [];
    for (let i = array.length-1; i > 0; i--) {
        newArray.push(array[i]);
    }

   return newArray;*/
}

const array = ["Vue", "JS", "SQL", "Angular", "Mongodb", "Kotlin"];
console.log(reverseArray(array));

/*
 es una forma sencilla de invertir el orden de un array. Usando el método reverse() de los arrays, puedes devolver un nuevo array con los elementos en orden inverso.

Sin embargo, si deseas hacerlo manualmente sin usar el método reverse(), 
podrías crear un nuevo array vacío y luego agregar los elementos del array original en orden inverso mediante un ciclo for.
*/