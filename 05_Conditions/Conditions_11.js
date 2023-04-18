/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 11: Write a function that checks if a given year is a leap year.
*/

function leapYear(year) {
    if (year % 4 === 0) {
        return `${year} is leap.`;
    } else {
        return "The year is not leap.";
    }
}

console.log(leapYear(2012));