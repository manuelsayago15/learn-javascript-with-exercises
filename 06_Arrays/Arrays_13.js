/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 13: Crea una función llamada "sumArray" que tome un array de números como parámetro, y devuelva la suma de todos los números del array.
*/

function sumArray (array) {
    let total = 0;
    const sum = array.forEach(item => {
        total += item;
    });
    return total;

}

const arrayOfNumbers = [10, 15, 18, 17, 25, 21, 50, 9, 125, 46];
console.log(sumArray(arrayOfNumbers));