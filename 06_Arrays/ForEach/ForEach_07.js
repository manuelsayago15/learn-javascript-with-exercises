/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 7: Iterar sobre un array de números y mostrar la suma de los que sean mayores a 10.
*/

const array = [5, 26, 33, 15, 5, 23, 7];
let sum = 0;

const value = array.forEach(item => {
    if (item > 10) {
        sum += item;
    }
})
console.log(sum);