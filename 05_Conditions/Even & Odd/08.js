/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Even & Odd
    Exercise 8: Write a program that prompts the user to enter a number and then checks whether it's a multiple of 3 or 5 (or both). If it is, log a message to the console.
*/

const prompt=require("prompt-sync")({sigint:true}); 
let number = prompt('Enter a number: ');
let multipleOf3 = 0;
let multipleOf5 = 0;
if (number % 3 === 0) {
    console.log("It's multiple of 3.");
    multipleOf3++;
}

if (number % 5 === 0) {
    console.log("It's multiple of 5.");
    multipleOf5++;
}

if (multipleOf3 > 0 && multipleOf5 > 0) {
    console.log("It's multiple of 3 and 5.");
}

/*
otra forma de resolverlo podría ser utilizando un operador ternario:

const prompt = require("prompt-sync")({sigint:true}); 
const number = prompt('Enter a number: ');
const isMultipleOf3 = (number % 3 === 0);
const isMultipleOf5 = (number % 5 === 0);

console.log(isMultipleOf3 && isMultipleOf5 ? "It's multiple of 3 and 5." :
            isMultipleOf3 ? "It's multiple of 3." :
            isMultipleOf5 ? "It's multiple of 5." : "It's not a multiple of 3 or 5.");
En este caso, se utilizan operadores lógicos para determinar si el número es múltiplo de 3 y/o 5 y luego se usa un operador ternario para imprimir el mensaje correspondiente.
*/