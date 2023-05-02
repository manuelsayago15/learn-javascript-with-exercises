/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 20: Iterar sobre un array de strings y mostrar el string más largo.
*/

const array = ["Vue", "JS", "SQL", "Angular", "Mongodb", "Kotlin", 'Svelte'];
let largestString = array[0].length;
let largestLength;
const newArray = [];
const string = array.forEach(item => {
    if (item.length > largestString) {
        largestString = item;
        largestLength = largestString.length;
        newArray.length = 0;
    }
    if (item.length === largestLength) {
        newArray.push(item);
    }
});
console.log(largestString);
console.log(newArray);