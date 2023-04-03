/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 8: Crea una función llamada "getLastWord" que tome una cadena como argumento y devuelva la última palabra de la cadena utilizando el método substring.
*/

function getLastWord (string) {
    let space = string.lastIndexOf(' ');
    //console.log(space);
    return string.substring(space+1);
}

console.log(getLastWord("Javascript course"));