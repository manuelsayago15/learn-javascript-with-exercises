/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 6: Crea una variable llamada "myString" y asígnale el valor "Hello world". Luego, usa el método substring para obtener los primeros 5 caracteres y los últimos 5 caracteres. 
    Concatena estos dos subcadenas para crear una nueva cadena y guárdala en una variable llamada "newString".
*/

function strings () {
    let myString = "Hello world";
    let firstFive = myString.substring(0, 5);
    let lastFive = myString.substring(myString.length-5);
    return firstFive + lastFive;
}

console.log(strings());