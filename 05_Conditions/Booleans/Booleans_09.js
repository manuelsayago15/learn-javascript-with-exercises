/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 16: Define una función llamada isDivisibleByAll que reciba un número 
    y un arreglo de números como parámetros y devuelva true si el número es divisible por todos los números del arreglo y false si no lo es.
*/

function isDivisibleByAll (number, arrayNumbers) {
    let counter = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (number % arrayNumbers[i] === 0) {
            counter++;
        }
    }
    if (counter === arrayNumbers.length) {
        return true;
    } return false;
}

let array = [2, 4, 20, 8, 40];
console.log(isDivisibleByAll(200, array));

/*

una forma más breve sería utilizar el método every() del arreglo, el cual devuelve true si todos los elementos del arreglo pasan una prueba (dada por una función), de lo contrario devuelve false. En este caso, la función que pasaríamos al método every() sería una función que comprueba si el número es divisible por cada uno de los elementos del arreglo.

Aquí te dejo el código usando este enfoque:

function isDivisibleByAll (number, arrayNumbers) {
  return arrayNumbers.every(function(element) {
    return number % element === 0;
  });
}

let array = [2, 4, 20, 8, 40];
console.log(isDivisibleByAll(200, array));
Este código hace lo mismo que la función anterior, pero de una forma más concisa y legible, ya que el método every() 
se encarga de iterar sobre el arreglo y evaluar la condición para cada elemento.

*/