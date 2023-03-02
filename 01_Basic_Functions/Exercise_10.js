/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Basic Functions
    Exercise 10: Escribe una función que tome una cadena como argumento y devuelva la misma cadena pero invertida.
*/

function backwardsString(string) {
    return string.split("").reverse().join("");
}

console.log(backwardsString('Learn Javascript'));
console.log(backwardsString('Javascript'));
console.log(backwardsString('tpircsavaJ'));

/* La función backwardsString recibe una cadena de texto como argumento, 
la convierte en un array de caracteres usando el método split(''), 
invierte el orden de los elementos del array con el método reverse(), 
y luego los vuelve a unir en una cadena con el método join(''). 
De esta forma, se obtiene la cadena original pero en orden inverso. La primera salida debería ser tpircsavaJ nraeL */