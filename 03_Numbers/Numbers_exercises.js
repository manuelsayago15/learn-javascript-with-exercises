/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Numbers
*/

// 1. Create a variable with the value of 5 and multiply it by 2. (Crea una variable con el valor de 5 y multiplícala por 2)
let number = 5;
console.log('Result: ' + number*2) + '\n';
// 2. Create a variable with the value of 10,000 and add 500 to it. (Crea una variable con el valor de 10,000 y súmale 500)
number = 10000;
console.log(number + 500) + '\n';
// 3. Convert the number 42 into a string. (Convierte el número 42 en una cadena de texto)
let number1 = 42;
console.log(number1.toString()) + '\n';
// 4. Create a variable with the value of 3.14159 and round it to the nearest whole number. (Crea una variable con el valor de 3.14159 y redondea al número entero más cercano)
let pi = 3.14159;
console.log(Math.round(pi)) + '\n';
// 5. Create a variable with the value of -20 and check if it's a positive number. (Crea una variable con el valor de -20 y verifica si es un número positivo)
let number2 = -20;
if (number2 >= 0) {
    console.log("Positive number") + '\n';
} console.log("Negative number") + '\n';
// 6. Create a variable with the value of 5.5 and check if it's an integer. (Crea una variable con el valor de 5.5 y verifica si es un número entero)
let value = 5.5;
console.log('Value: ' + Number.isInteger(value)) + '\n';
// 7. Create a variable with the value of NaN and check if it's a number. (Crea una variable con el valor de NaN y verifica si es un número)
let value1 = NaN;
console.log(isNaN(value1)) + '\n';
// 8. Create a variable with the value of 1_000_000 and divide it by 10. (Crea una variable con el valor de 1_000_000 y divídela por 10)
let value2 = 1_000_000;
console.log(value2 / 10) + '\n';
// 9. Create a variable with the value of -3.7 and round it up to the nearest whole number. (Crea una variable con el valor de -3.7 y redondea hacia arriba al número entero más cercano)
let value3 = -3.7;
console.log(Math.round(value3)) + '\n';
// 10. Create a variable with the value of "7" and convert it into a number. (Crea una variable con el valor de "7" y conviértela en un número)
let value4 = "7";
console.log(Number.parseInt(value4, 10));