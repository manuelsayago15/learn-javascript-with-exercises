/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 15: Crea una función llamada "findMax" que tome un array de números como parámetro, y devuelva el número más grande del array.
*/

/*
function findMax (array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;
}
*/


/*
function findMax (array) {
    let maxNumber = 0
    const max = array.find(item => {
        if(item > maxNumber){
            maxNumber = item;
        }
    });
    return maxNumber;
}
*/

/*
En realidad, el método find no es la forma más adecuada de encontrar el valor máximo en un array. 
La razón es que el método find se utiliza para encontrar un elemento específico en un array que cumpla una condición determinada, 
pero no es muy útil para encontrar el valor máximo.

Una forma más corta y adecuada de encontrar el valor máximo de un array es utilizando el método Math.max, 
que es una función incorporada de JavaScript que devuelve el valor máximo de un conjunto de números.
*/


/*
function findMax(array) {
    return Math.max(...array);
}
*/

function findMax (array) {
    let maxNumber = 0;
    const max = array.forEach(item => {
        if (item > maxNumber) {
            maxNumber = item;
        }
    })
    return maxNumber;
}

const array = [4, 50, 26, 78, 99, 1000, 1001, 10001, 65, 100, 987];
console.log(findMax(array));