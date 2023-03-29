/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 5: Dado un string, imprime la última letra utilizando bracket notation y console.log().
*/

function lastLetterString(string) {
    return string[string.length-1];
    //console.log(string[string.length-1]);
}

console.log(lastLetterString("Angular"));
console.log(lastLetterString("React"));
console.log(lastLetterString("Vue"));

/*
También podemos resolver este ejercicio utilizando la propiedad .at de Javascript:
    return string.at(-1);
*/