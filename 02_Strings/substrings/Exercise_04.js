/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 4: Crea una variable llamada "longString" y asígnale el valor "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
    Luego, usa el método substring para obtener los primeros 10 caracteres y guárdalos en una nueva variable llamada "shortString".
*/

function loremIpsum() {
    let longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    let shortString = longString.substring(0,10);
    return shortString;
}

console.log(loremIpsum());