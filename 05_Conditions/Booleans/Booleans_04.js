/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions - Booleans
    Exercise 4: Define una función llamada hasVowels que reciba una cadena de texto como parámetro y 
    devuelva true si la cadena contiene al menos una vocal y false si no contiene ninguna vocal.
*/

function hasVowels (string) {
    let lowerString = string.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for (let i = 0; i < lowerString.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (lowerString[i] === vowels[j]) {
                counter+= 1;
                return true;
            }
        }
    }

    if (counter === 0) {
        return false;
    }
}

console.log(hasVowels("hy"));

/*function hasVowels(string) {
    return /[aeiou]/i.test(string);
}

console.log(hasVowels("hy")); // false
console.log(hasVowels("hello")); // true
*/
