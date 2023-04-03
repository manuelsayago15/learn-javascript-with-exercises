/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 1: Crea una variable llamada "myString" y asígnale el valor "Hello world". 
    Luego, usa el método substring para obtener la palabra "world" y guárdala en una nueva variable llamada "mySubstring".
*/

function helloWorld () {
    let myString = "Hello world";
    let mySubstring = myString.substring(6);
    return mySubstring;
}

console.log(helloWorld());