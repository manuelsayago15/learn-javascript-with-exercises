/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 5: Iterar sobre un array de números y mostrar solo los pares.
*/

const array = [1200, 50, 26, 78, 99, 1000, 1001, 2, 10001, 65, 100, 987, 3, 10, 1, 54, 45, 0, 89];

const evens = array.forEach(item => {
    if (item % 2 === 0) {
        console.log(item);
    }
})