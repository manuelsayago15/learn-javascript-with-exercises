/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Strings
    Exercise 7: Dado un string, imprime las letras en posición par utilizando un loop y console.log().
*/

function pairPositionLetter(string){
    console.log("Letras en posición par:");
    for(let i=0; i<string.length; i++){
        if(i % 2 === 0){
            console.log(string[i]);
        }
    }
}

pairPositionLetter("Javascript");

/*
La función pairPositionLetter recorre cada letra del string utilizando un bucle for. 
En cada iteración se verifica si la posición actual del índice es par utilizando el operador %. 
Si el resultado de i % 2 es 0, significa que la posición es par y se imprime la letra correspondiente utilizando console.log().
*/