/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 14: Write a function that takes in two strings and returns a boolean indicating whether they are equal regardless of case, 
    using the .toLowerCase() method. Example input: "Hello", "heLLo", output: true.
*/

function lowerCase (string1, string2) {
    if(string1.toLowerCase() === string2.toLowerCase()){
        return true;
    } return false;
}

console.log(lowerCase("javascript", "JAvaSCRIpT"));