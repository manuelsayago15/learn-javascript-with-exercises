/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 12: Crea una función llamada "isPalindrome" que tome un array como parámetro, 
    y devuelva true si el array es un palíndromo (es decir, se lee igual de izquierda a derecha que de derecha a izquierda), o false si no lo es.
*/

/*

function isPalindrome (array) {
    let string = '';
    let newString;
    let reversedString;
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    newString = string.replace(/[\W_]/g, "").toLowerCase();
    reversedString = newString.split(",").reverse().join();
    if (newString === reversedString) {
        return true;
    } return false;
}

*/

/*
He creado una cadena concatenando todos los elementos del array y luego elimino todos los caracteres que no sean letras y 
transformo la cadena en minúsculas. Luego he invertido la cadena utilizando la función reverse() y 
compruebo si es igual a la original sin los caracteres no alfanuméricos y en minúsculas.

Simplificando un poco la solución, utilizo la función join() para unir todos los elementos del array en una cadena y 
evitando utilizar la coma como separador al invertir la cadena. 
También se puede utilizar un operador ternario en lugar de una estructura if/else para simplificar el código.

*/

function isPalindrome (array) {
    console.log(array.join());
    const str = array.join("").replace(/[\W_]/g, "").toLowerCase();
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr ? true : false;
  }

const array = ["atar a", "la", "rata"];
console.log(isPalindrome(array));
