/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Numbers
    Exercise 14: Convert the string "0xFF" to a number and assign it to a variable called myHex.
*/

let string = "0xFF";
let myHex = Number.parseInt(string, 16);
console.log(myHex);