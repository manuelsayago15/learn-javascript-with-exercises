/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 3: Crea una función llamada "getLastThreeChars" que tome una cadena como argumento y devuelva los últimos tres caracteres como una nueva cadena utilizando el método substring.
*/

function getLastThreeChars (string) {
    return string.substring(string.length-3);
}

console.log(getLastThreeChars("javascript"));