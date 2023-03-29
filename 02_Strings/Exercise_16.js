/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 16: Write a function that takes in two strings and returns the combined length of both strings, 
    using the .length property and string concatenation. Example input: "hello", "world", output: 10.
*/

function stringsCombined (string1, string2) {
    return string1.length + string2.length;
}

console.log(stringsCombined("Javascript", "React"));