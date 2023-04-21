/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 17: Crea una función llamada "removeDuplicates" que tome un array como parámetro, y devuelva un nuevo array sin elementos duplicados.
*/


function removeDuplicates (array) {
    let noDuplicates = [];
    let duplicates = [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === i) {
            noDuplicates.push(array[i]);
        } else {
            duplicates.push(array[i]);
        }
    }
    return noDuplicates;
}

/*
function removeDuplicates (array) {
    const noDuplicates = array.filter((item, index) => {
        //console.log(item);
        //console.log(index);
        return array.indexOf(item) === index;
    });
    return noDuplicates;
}
*/
const array = ["Vue", "SQL", "Angular", "Mongodb", "Kotlin", "Vue", "JS", "JS" ,"Mongo", "SQL"];
console.log(removeDuplicates(array));

/*
Esta implementación utiliza el método .filter() en combinación con .indexOf() para devolver un nuevo array sin elementos duplicados. 
El método .indexOf() devuelve el índice de la primera ocurrencia del elemento en el array. 
Por lo tanto, al comparar el índice actual del elemento con el índice de su primera aparición, podemos filtrar los elementos duplicados.
*/