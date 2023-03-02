/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Basic Functions
    Exercise 9: Escribe una función que tome un array de números como argumento y devuelva la media del array.
*/

function arrayAverage(array) {
    if(array.length === 0) {
        return undefined;
    }
    let average = 0;
    array.forEach(arrayNumber => {
        average += arrayNumber;
    })

    //const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);

    return average/array.length;
}

console.log(arrayAverage([1,10,35,80]));
console.log(arrayAverage([0,101,57,100]));
console.log(arrayAverage([-50,33,42,-2]));
console.log(arrayAverage([]));