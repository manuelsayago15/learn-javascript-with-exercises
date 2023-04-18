/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions - Booleans
    Exercise 6: Define una función llamada isPalindrome que reciba una cadena de texto como parámetro y 
    devuelva true si la cadena es un palíndromo y false si no lo es.
*/

function isPalindrome (string) {
    /*const newStr = string.replace(/[\W_]/g, "").toLowerCase();
    const reversedString = newStr.split("").reverse().join("");
    console.log(reversedString);
    return newStr === reversedString ? true : false;*/
    let reversedString = '';
    let newString = string.toLowerCase();
    for (let i = newString.length-1; i >= 0; i--) {
        //console.log(newString[i]);
        reversedString+= newString[i];
        //reversedString.push(newString[i]);
    }
    //console.log(reversedString);

    if (string === reversedString) {
        return true;
    } return false;
}

console.log(isPalindrome("oso"));

/*
También funciona sin usar los métodos split, reverse y join. Básicamente, en lugar de usar split para convertir la cadena en una matriz, 
y reverse para invertir la matriz, usé un bucle for para recorrer la cadena de caracteres de atrás hacia adelante y 
concatené cada letra a una nueva cadena reversedString. Luego, verifiqué si la cadena original es igual a la cadena invertida.

Sin embargo, ten en cuenta que esta solución es menos legible y más verbosa que la solución que hice anteriormente, que utiliza 
los métodos split, reverse y join. Además, para cadenas muy grandes, puede ser menos eficiente en términos de tiempo y memoria, 
ya que crea una nueva cadena reversedString y concatena cada letra en cada iteración del bucle.
*/