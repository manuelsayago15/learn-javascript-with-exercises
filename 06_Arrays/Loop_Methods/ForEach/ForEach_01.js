/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 1: Dada una matriz de números enteros, escribe una función que devuelva el número más grande de la matriz.
*/

function max (array){
    let currentMax = 0;
    const maxNumber = array.forEach(item => {
        if (item > currentMax) {
            currentMax = item;
        }
    })
    return currentMax;
}

const array = [2, 3, 4, 5, 6, 9, 12, 15, 20];
console.log(max(array));
