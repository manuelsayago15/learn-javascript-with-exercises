/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 20: Write a function that takes in two strings and returns a new string with all instances of the second string removed from the first string, 
    using the .replace() method. Example input: "hello world", "o", output: "hell wrld".
*/

function replace (string1, string2) {
    return string1.replace(new RegExp(string2, 'g'), '');
}

console.log(replace("hello world", "o"));