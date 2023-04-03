/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 10: Crea una función llamada "truncateString" que tome dos argumentos: una cadena y un número. Si la longitud de la cadena es mayor que el número, 
    la función debe devolver una subcadena que contenga los primeros "n" caracteres de la cadena seguidos de "..." utilizando el método substring. 
    Si la longitud de la cadena es menor o igual que el número, la función debe devolver la cadena original.
*/

function truncateString (string, number) {
    if (string.length > number) {
        return string.substring(0, number)+'...';
    } else {
        return string;
    }
}

console.log(truncateString("Javascript", 5));