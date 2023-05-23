/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 3: Escribe una función llamada getNumberOfOccurrences que reciba un array de strings y un string en particular, 
    y devuelva el número de veces que el string en particular aparece en el array.
*/

function getNumberOfOccurrences(array, string) {
    let occurrence = 0;
    const findOccurrences = array.forEach(item => {
        if (item === string) {
            occurrence += 1;
        }
    })
    return occurrence;
}

const array = ["Manuel", "Alejandro", "Maria", "Nestor", "Manuel"];
console.log(getNumberOfOccurrences(array, "Manuel"));

/*
function getNumberOfOccurrences(array, string) {
  return array.reduce((count, item) => item === string ? count + 1 : count, 0);
}

const array = ["Manuel", "Alejandro", "Maria", "Nestor", "Manuel"];
console.log(getNumberOfOccurrences(array, "Manuel")); // Output: 2
*/