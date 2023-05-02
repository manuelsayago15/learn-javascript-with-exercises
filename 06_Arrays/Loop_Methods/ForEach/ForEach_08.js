/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 8: Iterar sobre un array de strings y crear un nuevo array con los mismos strings, pero en mayúsculas.
*/
const array = ["Vue", "JS", "SQL", "Angular", "Mongodb", "Kotlin"];
const newArray = [];
const value = array.forEach(item => {
    newArray.push(item.toUpperCase());
})
console.log(newArray);