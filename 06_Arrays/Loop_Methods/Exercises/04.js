/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 4: Escribe una función llamada getLastOddNumber que reciba un array de números y 
    devuelva el último número impar encontrado en el array. Si no hay números impares, la función deberá devolver undefined.
*/

function getLastOddNumber(array) {
    let oddArray = [];
    const findLastOdd = array.forEach(item => {
        if (item % 2 !== 0) {
            oddArray.push(item);
        }
    });
    return oddArray.at(-1);
}

const array = [2, 4, 5, 6, 9, 12, 13, 54, 23, 90, 3];
console.log(getLastOddNumber(array));

/*/
function getLastOddNumber(array) {
    const oddArray = array.filter(item => item % 2 !== 0);
    return oddArray.length > 0 ? oddArray.at(-1) : undefined;
}

const array = [2, 4, 5, 6, 9, 12, 13, 54, 23, 90, 3];
console.log(getLastOddNumber(array));
*/

/*
En esta versión de la función, primero usamos el método filter() para crear un nuevo array oddArray con los números impares. 
Luego, verificamos si oddArray tiene elementos usando la propiedad length. 
Si la longitud es mayor que cero, usamos el método at(-1) para devolver el último elemento de oddArray. De lo contrario, devolvemos undefined.
*/