/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 1: Write a program that checks if a number is positive, negative or zero and logs an appropriate message to the console. 
    (Escriba un programa que verifique si un número es positivo, negativo o cero y muestre un mensaje apropiado en la consola.)
*/

function number (value) {
    if (value > 0) {
        return "Number is positive";
    } else if (value < 0) {
        return "Number is negative";
    } else {
        return console.log("Number is zero");
    }
}

console.log(number(-8));