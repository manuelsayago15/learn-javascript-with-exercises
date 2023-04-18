/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 16: Define una función llamada isSquare que reciba un número como parámetro y devuelva true si el número es un cuadrado perfecto y false si no lo es.
*/

function isSquare (number) {
    //console.log(Math.sqrt(number));
    //return Math.sqrt(number) % 1 === 0;
    let squareRoot = Math.sqrt(number);
    if (squareRoot === Number.parseInt(squareRoot)) {
        return true;
    } return false;
}

console.log(isSquare(25));

