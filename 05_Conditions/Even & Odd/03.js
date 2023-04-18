/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Even & Odd
    Exercise 3: Write a function that takes an array of numbers as input and returns an array containing only the even numbers.
*/

function evenArray (array) {
    
    const found = array.filter(element => element % 2 === 0);
    return found;

    /*let evens = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens.push(array[i]);
        }
    }

    return evens;
    */
}


let numbers = [1, 3, 4, 6, 9, 12, 7, 19, 24, 20, 18];
console.log(evenArray(numbers));