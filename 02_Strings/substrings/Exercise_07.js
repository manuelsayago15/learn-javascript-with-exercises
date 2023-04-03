/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 7: Crea una función llamada "getSubstring" que tome tres argumentos: una cadena, un índice de inicio y un índice de finalización. 
    La función debe devolver la subcadena que comienza en el índice de inicio y termina en el índice de finalización utilizando el método substring.
*/

function getSubstring (string, indexStart, indexEnd) {
    return string.substring(indexStart, indexEnd);
}

console.log(getSubstring("substrings", 1, 4));