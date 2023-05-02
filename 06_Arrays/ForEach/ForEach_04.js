/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 4: Iterar sobre un array de strings y mostrar solo los que tengan más de 5 caracteres.
*/

const array = ["Vue", "JS", "SQL", "Angular", "Mongodb", "Kotlin"];

const value = array.forEach(item => {
    if (item.length > 5) {
        console.log(item);
    }
})