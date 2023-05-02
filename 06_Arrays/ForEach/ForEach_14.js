/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 14: Iterar sobre un array de strings y crear un nuevo array solo con los strings que empiecen por una letra determinada.
*/

const array = ["Vue", "JS", "SQL", "Angular", "Mongodb", "Kotlin", 'Svelte'];
const newArray = [];
let letter = 's'
const strings = array.forEach(item => {
    if (item[0].toLowerCase() === letter) {
        newArray.push(item);
    }
});
console.log(newArray);