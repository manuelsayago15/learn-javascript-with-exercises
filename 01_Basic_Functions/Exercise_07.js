/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Basic Functions
    Exercise 7: Escribe una función que tome un array de números como argumento y devuelva la suma de todos los números.
*/

function numbersArray(array) {
    let sum = 0;
    array.forEach(array => {
        sum += array;
    })
    return sum
}

console.log(numbersArray([5,2,10,4,6]));
console.log(numbersArray([10,20,30,40]));
console.log(numbersArray([-1,-9,-15,8,3]));