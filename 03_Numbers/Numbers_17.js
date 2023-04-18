/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Numbers
    Exercise 17: Convert the string "twenty-five" to a number and assign it to a variable called myNaN.
*/

let string = "twenty-five";
let myNaN = Number.parseInt(string, 10);
console.log(myNaN);