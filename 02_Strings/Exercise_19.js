/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 19: Create a function that takes in a string and returns the second to last character, 
    using the square bracket syntax and the .length property. Example input: "JavaScript", output: "p".
*/

function secondLast(string) {
    return string[string.length-2];
}

console.log(secondLast("Javascript"));