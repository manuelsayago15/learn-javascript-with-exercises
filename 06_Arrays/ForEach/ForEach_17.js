/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 17: Iterar sobre un array de strings y mostrar solo los que sean palíndromos.
*/

const array = ["Oso", "Anita lava la tina", "Atar a la rata", "Yo dono rosas, oro no doy", "Sometamos o matemos", "Isaac no ronca así", "Palindromos", "La cueva", "Ocho goles anotados"];
let string;
let reversedString;
let isPalindrome = [];
const palindrome = array.forEach(item => {
    string = item.replace(/[\W_]/g, "").toLowerCase();
    reversedString = string.split("").reverse().join("");
    if (reversedString === string) {
        isPalindrome.push(item);
    }
});
console.log(isPalindrome);