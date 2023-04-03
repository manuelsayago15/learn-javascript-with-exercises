/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 9: Crea una variable llamada "myString" y asígnale el valor "abcdefghijklmnopqrstuvwxyz". 
    Luego, usa el método substring para obtener una subcadena que contenga solo las letras "hijklmnop".
*/

function abc () {
    let myString = 'abcdefghijklmnopqrstuvwxyz';
    let index = myString.indexOf('h');
    let indexEnd = myString.indexOf('p');
    return myString.substring(index, indexEnd+1);
}

console.log(abc());