/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Basic Functions
    Exercise 10: Dado un string, reemplaza todas las letras 'a' por 'o' utilizando replace() y console.log().
*/

function replaceLetter(string) {
    return string.replace(/a/g, 'o');
}

console.log(replaceLetter("Javascript"));

/* 
Debes utilizar una expresión regular con el indicador global /g para hacer que la búsqueda sea global.
*/