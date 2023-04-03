/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 2: Crea una función llamada "getFirstThreeChars" que tome una cadena como argumento y devuelva los primeros tres caracteres como una nueva cadena utilizando el método substring.
*/

function getFirstThreeChars (string) {
    return string.substring(0,3);
}

console.log(getFirstThreeChars("Javascript"));