/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions - Booleans
    Exercise 7: Define una función llamada isLeapYear que reciba un año como parámetro y devuelva true si el año es bisiesto y false si no lo es.
*/

function isLeapYear (year) {
    if (year % 4 === 0) {
        return true;
    } return false;
}

console.log(isLeapYear(2017));