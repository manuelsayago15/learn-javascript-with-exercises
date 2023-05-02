/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 10: Iterar sobre un array de números y crear un nuevo array solo con los números que sean impares.
*/

const array = [5, 26, 33, 15, 5, 23, 7, 8, 17, 25];
const newArray = [];
const value = array.forEach(item => {
    if (item % 2 !== 0) {
        newArray.push(item);
    }
})
console.log(newArray);