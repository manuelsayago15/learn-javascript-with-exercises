/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 8: Write a program that takes a string as input and then logs whether it contains the letter "a" to the console. 
    (Escriba un programa que tome una cadena de caracteres como entrada y luego muestre si contiene la letra "a" en la consola.)
*/

let string = "Manuel";
for (let i = 0; i <= string.length; i++) {
    if (string[i] === "a") {
        console.log(`The word ${string} has a letter a:`, string[i]);
    }
}

/*
let string = "Manuel";
if (string.includes("a")) {
  console.log(`The word ${string} has a letter a`);
}
*/