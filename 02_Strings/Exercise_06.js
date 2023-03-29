/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 6: Dado un string, imprime su penúltima letra utilizando bracket notation y console.log().
*/

function penultimaLetter(string) {
    return string[string.length-2]
}

console.log(penultimaLetter("Learning"));

/* 
function penultimateLetter(str) {
  return str[str.length - 2];
}

console.log(penultimateLetter("Learning"));
*/