/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 10: Escribe una función llamada getLongestString que reciba un array de strings y devuelva el string más largo encontrado en el array.
*/

function getLongestString(array) {
    let longestString = array[0].length;
    let max = 0;
    const findLongestString = array.forEach(item => {
        if (item.length > longestString) {
            longestString = item;
        }
        if (item.length >= longestString.length) {
            max = item;
        }
        //console.log(max)
    });
    return longestString + " " + max;
}

const array = ["Manuel", "Vue", "Angular", "Jenkins", "GoJS"];
console.log(getLongestString(array));