/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 11: Create a function that takes in a string and returns the first and last characters concatenated together using the .concat() method. Example input: "JavaScript", output: "Jt".
*/

function firstLast (string) {
    //return string[0] + string.at(-1)
    //return string[0] + string.slice(-1);
    return string[0] + string[string.length-1];
}

console.log(firstLast("Sayago"));