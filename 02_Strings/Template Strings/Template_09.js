/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Template Strings
    Exercise 9: Write a function that takes in two variables and returns a string using template literals.
*/
function templateLiterals (name, age) {
    return `Hello ${name}, are you ${age}?`;
}

console.log(templateLiterals("Manuel", 32));