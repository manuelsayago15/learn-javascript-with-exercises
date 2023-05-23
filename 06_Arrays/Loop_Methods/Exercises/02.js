/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 2: Escribe una función llamada isEveryStringLongerThan5 que reciba un array de strings 
    y devuelva true si cada string en el array tiene una longitud mayor a 5 caracteres. Si algún string es menor o igual a 5 caracteres, la función deberá devolver false.
*/

/*
function isEveryStringLongerThan5(array) {
    let sum = 0;
    const findStringLength = array.forEach(item => {
        if (item.length > 5){
            sum += 1;
        } else {
            sum--;
        }

    })
    if (sum === array.length){
        return true;
    } else {
        return false;
    }
}
*/

function isEveryStringLongerThan5(array) {
    return array.every(item => item.length > 5);
}

const array = ["Vue", "Manuel", "Maria", "Nestor", "Manuel"];
console.log(isEveryStringLongerThan5(array));