/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 16: Iterar sobre un array de números y mostrar solo los que sean múltiplos de 3.
*/

const array = [1, 3, 4, 5, 7, 19, 10, 15, 30, 45, 18, 20];
const multiples = array.forEach(item => {
    if (item % 3 === 0) {
        console.log(item);
    }
})