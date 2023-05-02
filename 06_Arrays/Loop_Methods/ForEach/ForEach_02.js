/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 2: Crea una función llamada sumNumbers que tome un array de números y devuelva la suma total de los mismos.
*/

function sumNumbers (array) {
    let total = 0;
    const sum = array.forEach(item => {
        total += item;
    })
    return total;
}

const array = [2, 3, 4, 5, 6, 9, 12, 15, 20];
console.log(sumNumbers(array));