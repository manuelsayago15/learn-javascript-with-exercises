/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Arrays
    Exercise 6: Escribe una función llamada getFirstItemInCommon que reciba dos arrays de strings 
    y devuelva el primer string que tienen en común. Si no hay strings en común, la función deberá devolver undefined.
*/

function getFirstItemInCommon(array1, array2) {
    let commonItem;
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]){
                commonItem = array1[i];
            }
        }
    }
    if(commonItem !== ''){
        return commonItem;
    } else {
        return undefined;
    }

}

const array1 = ["Manuel", "Vue", "Angular", "Jenkins", "GoJS"];
const array2 = ["Alex", "Maria", "Nestor", "Manuel"];
console.log(getFirstItemInCommon(array1, array2));