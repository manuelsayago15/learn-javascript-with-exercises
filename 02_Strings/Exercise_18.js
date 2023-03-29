/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 18: Write a function that takes in two strings and returns the index of the first occurrence of the second string within the first string, 
    using the .indexOf() method. Example input: "hello world", "world", output: 6.
*/

function indexOfStrings(string1, string2) {
    return string1.indexOf(string2);
}

console.log(indexOfStrings("Hello World", "World"));