/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 19: Iterar sobre un array de números y mostrar el número más grande.
*/

const array = [1, 3, 4, 5, 7, 19, 10, 15, 30, 45, 18, 20, 78, 100];
let max = array[0];
const newArray = array.forEach(item => {
    max = item;
    if(item > max){
        max = item;
    }
});
console.log(max);

/*
const array = [1, 3, 4, 5, 7, 19, 10, 15, 30, 45, 18, 20, 78, 100];
const max = array.find(item => item === Math.max(...array));
console.log(max);
En este ejemplo, la función find busca el elemento en el array que es igual al número más grande en el array, 
que se obtiene mediante el uso de Math.max en el array. La variable max contendrá el número más grande encontrado en el array.
*/