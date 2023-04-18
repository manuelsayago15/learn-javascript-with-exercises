/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 17: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
*/

function palindrome (string) {
    /*for (let i = 0; i < string.length; i++) {

    }*/
    const newStr = string.replace(/[\W_]/g, "").toLowerCase();
    const reversedString = newStr.split("").reverse().join("");

    return newStr === reversedString ? `${string} is palindrome` : `${string} is not a palindrome.`;
}

console.log(palindrome("osO"));

/*
Primero creamos la función, definiendo que debe recibir un string.

Creamos la constante strReversed, en la que guardaremos el string invertido.

.split('') lo separa en un array.

.reverse() revierte el arreglo.

.join('') Lo vuelve a convertir en string.

Por ultimo usando el operador ternario, indicamos que si ambas cadenas son iguales devuelva 'es palindromo', y si no 'no es palindromo'.

Con esto podríamos dar el ejercicio por terminado pero aún falta algo, la función anterior solo sirve para palabras, 
si necesitamos verificar que alguna frase sea palindromo el código anterior no funcionará así que vamos a agregarle algunas cositas a nuestro ejemplo.
*/

/*
Añadir expresión regular para eliminar espacios en blanco del string
Copiarjs
function palindromeChecker(str) {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");

  return newStr === strReversed ? "es palindromo" : "no es palindromo";
}

console.log(palindromeChecker("Ali tomo tila")); // es palindromo
console.log(palindromeChecker("Amad a la dama")); // es palindromo
console.log(palindromeChecker("otra cosa")); // no es palindromo
Lo que hemos echo es agregar una nueva constante que guarda el valor del string pero eliminando los espacios, 
gracias a la expresión regular que pasamos dentro del método .replace(), también lo convertimos en minúsculas.

La constante strReversed es igual a la anterior solo que esta vez se crea a partir de el valor de newStr.
*/