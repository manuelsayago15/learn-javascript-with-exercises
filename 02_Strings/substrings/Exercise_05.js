/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 5: Crea una función llamada "getMiddleChars" que tome una cadena como argumento y devuelva los caracteres del medio como una nueva cadena utilizando el método substring. 
    Si la longitud de la cadena es impar, devuelve el carácter en el medio. Si es par, devuelve los dos caracteres del medio.
*/

/*function getMiddleChars (string) {
    const middle = Math.floor(string.length/2);
    if (string.length % 2 === 0) {
        return string.substring(middle-1, middle+1);
    } else {
        return string.substring(middle, middle+1);
    }
}

console.log(getMiddleChars("caza"));
*/

function getMiddleChars (string) {
    if (string.length % 2 === 0) {
        even = string.length/2;
        return string.substring(even-1, even+1);
    } else {
        odd = Math.floor(string.length/2);
        return string.substring(odd, odd+1);
    }
}

console.log(getMiddleChars("caza"));
