/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Basic Functions
    Exercise 2: Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos.
*/

function greaterThan(a, b) {
    if(a > b) {
        return a;
    }
    return b;
}

console.log(greaterThan(96,25));

/* Definimos una función llamada greaterThan la cual toma dos argumentos. Dentro de la función,
comparamos los argumentos a y b con la condición if. Preguntamos si a es mayor que b.
En el caso de que esta condición se cumpla, retornaremos a con la instrucción return
De lo contrario, retornaremos b.
Nótese que no hizo falta usar else. Esto es porque como tenemos solamente dos posibles resultados if/else, 
podemos omitir la palabra else.
*/