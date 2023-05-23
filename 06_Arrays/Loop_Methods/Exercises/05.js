/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 5: Escribe una función llamada getSumOfFirstNNumbers que reciba un número n y devuelva la suma de los primeros n números naturales. 
    Si el número n es menor o igual a 0, la función deberá devolver undefined.
*/

function getSumOfFirstNNumbers(n) {
    if (n <= 0) {
        return undefined;
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum+= i;
    }
    return sum;

}

console.log(getSumOfFirstNNumbers(5));