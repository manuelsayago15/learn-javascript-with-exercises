/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 11: Iterar sobre un array de strings y crear un nuevo array solo con los strings que contengan una letra determinada.
*/

const array = ["Vue", "JS", "SQL", "Angular", "Mongodb", "Kotlin", 'Svelte'];
const newArray = [];
//let lower;
const strings = array.forEach(item => {
    ///lower = item.toLowerCase();
    if (item.toLowerCase().includes('s')) {
        newArray.push(item);
    }
})
console.log(newArray);

/*
Hhay otras formas de resolverlo. Una de ellas es utilizando el método filter(), que permite crear un nuevo array con los elementos que cumplan una determinada condición.

Por ejemplo:

const array = ["Vue", "JS", "SQL", "Angular", "Mongodb", "Kotlin", 'Svelte'];
const newArray = array.filter(item => item.toLowerCase().includes('s'));
console.log(newArray);
Este código devuelve un nuevo array con todos los elementos que contienen la letra "s", ignorando mayúsculas y minúsculas.
*/