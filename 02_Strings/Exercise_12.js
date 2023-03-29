/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 12: Write a function that takes in two strings and returns a new string with the first two characters from the first string 
    and the last two characters from the second string, using string concatenation and the .slice() method. Example input: "hello", "world", output: "held".
*/

function twoStrings (string1, string2) {
    if(string1.length < 2 || string2.length < 2){
        return "Give strings with 2 or more characters."
    }return string1[0] + string1[1] + string2.slice(-2);
}

console.log(twoStrings("Sayago", "Manuel"));