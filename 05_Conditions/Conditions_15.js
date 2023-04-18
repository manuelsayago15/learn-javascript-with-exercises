/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 15: Write a function that checks if a given number is a prime number.
*/

function primeNumber (number) {
    if (number < 2) {
        return `${number} is not prime.`;
    } else if (number === 2 || number === 3) {
        return `${number} is prime.`;
    } else {
        //for (let i = 2; i <= number; i++) {
        for (let i = 2; i < number; i++) {
            //if (number % i === 0 && i !== number) {
            if (number % i === 0) {
                return `${number} is not prime.`;
            }
    
        }
        return `${number} is prime.`;
    }
}
let result = primeNumber(8);
console.log(result);

/*
function primeNumber(number) {
  // Esta es la función que recibe el número a verificar si es primo
  if (number < 2) {
    // Si el número es menor que 2, no puede ser primo. 
    // Entonces, retornamos la cadena "número no es primo"
    return `${number} is not prime.`;
  } else if (number === 2 || number === 3) {
    // Si el número es 2 o 3, estos son números primos.
    // Entonces, retornamos la cadena "número es primo"
    return `${number} is prime.`;
  } else {
    // Si el número es mayor que 3, empezamos a buscar divisores a partir del 2.
    for (let i = 2; i <= number; i++) {
      if (number % i === 0 && i !== number) {
        // Si encontramos un divisor que no sea 1 ni el propio número, 
        // entonces el número no es primo. Retornamos la cadena "número no es primo"
        return `${number} is not prime.`;
      }
    }
    // Si no encontramos ningún divisor más allá del 1 y del propio número, 
    // entonces el número es primo. Retornamos la cadena "número es primo"
    return `${number} is prime.`;
  }
}

// Llamamos la función primeNumber con un argumento y asignamos el resultado a una variable
let result = primeNumber(8);

// Mostramos el resultado en la consola
console.log(result);
*/