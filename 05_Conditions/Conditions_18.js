/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 17: Create a function that takes an array of strings and returns the longest string.
*/

function longestString (string) {
    if (string.length > 0) {
        let longestString;
        let counter = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i].length > counter) {
                counter = string[i].length;
                longestString = string[i];
            }
        }
        return `The longest string is ${longestString}`;
    } else {
        return "Error, empty array."
    }
}

let strings = ["Manuel", "JavaScript", "Angular", "TypeScript", "Vue", "React"];
console.log(longestString(strings));