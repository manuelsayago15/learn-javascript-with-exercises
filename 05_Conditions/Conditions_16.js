/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Conditions
    Exercise 16: Create a function that takes a string and returns the number of vowels in the string.
*/

function vowelString (string) {
    let lowerCaseString = string.toLowerCase();
    console.log(lowerCaseString.length);
    let vowels = ["a", "e", "i", "o", "u"];
    console.log(vowels.length);
    let vowelsCounter = 0;
    let matchedVowels = [];
    for (let i = 0; i < lowerCaseString.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (lowerCaseString[i] === vowels[j]) {
                vowelsCounter = vowelsCounter + 1;
                matchedVowels.push(lowerCaseString[i]);
            }
        }
    }
    return `The number of vowels in the string is ${vowelsCounter} and the vowels were: ${matchedVowels}`;
}

console.log(vowelString("Manuel"));

/*
Has definido la función llamada vowelString que toma un argumento de cadena string.
Has creado una variable lowerCaseString que contiene la versión en minúsculas de string.
Has creado una matriz de vocales vowels.
Has creado una variable vowelsCounter inicializada a cero para contar el número de vocales en la cadena.
Has creado una matriz matchedVowels para almacenar todas las vocales que se encuentran en la cadena.
Has iniciado un bucle for que recorre cada letra de la cadena lowerCaseString.
Dentro del primer bucle for, inicias un segundo bucle for que recorre cada vocal en la matriz de vowels.
Si la letra actual en lowerCaseString es igual a la vocal actual en la matriz de vowels, entonces aumenta vowelsCounter en 1 y agrega la vocal coincidente a la matriz matchedVowels.
La función devuelve una cadena que indica el número de vocales en la cadena y las vocales encontradas.
Es importante destacar que debes tener cuidado con la condición del segundo bucle for. En lugar de <= vowels.length, debes usar < vowels.length porque las matrices comienzan en el índice cero, por lo que el último índice es uno menos que la longitud de la matriz.
*/

/*
Lo que hace la función vowelString es recibir un string y devolver el número de vocales que hay en el mismo y cuáles son.

Primero, la función convierte el string recibido en minúsculas para asegurarse de que todas las letras sean comparables. Luego, crea un array vowels con las cinco vocales. A continuación, se inicializan dos variables: vowelsCounter, que llevará la cuenta de cuántas vocales hay, y matchedVowels, que irá almacenando las vocales encontradas.

Luego, se inician dos bucles for. El primer bucle itera a través de cada letra del string utilizando la variable i, mientras que el segundo bucle itera a través de cada elemento del array vowels utilizando la variable j.

En cada iteración del segundo bucle, la función verifica si la letra actual en lowerCaseString es igual a la vocal actual en vowels. Si es así, aumenta el valor de vowelsCounter y añade la vocal encontrada al array matchedVowels.

Finalmente, la función devuelve una cadena de texto que indica el número total de vocales encontradas y las propias vocales.
*/