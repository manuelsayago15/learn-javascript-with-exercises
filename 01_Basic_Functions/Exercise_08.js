/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Basic Functions
    Exercise 8: Escribe una función que tome un array de números como argumento y devuelva el número más grande del array.
*/

function greaterNumberArray(array) {
    if(array.length === 0){
        return undefined;    
    }

    let result = array[0];
    array.forEach(arrayNumber => {
        if (arrayNumber > result) {
            result = arrayNumber;
        }
    })
    
    return result;
}

console.log(greaterNumberArray([1,9,150,105,8]))
console.log(greaterNumberArray([1,2,15,16,7]))
console.log(greaterNumberArray([10,-2,-315,-160,7]))
console.log(greaterNumberArray([]))