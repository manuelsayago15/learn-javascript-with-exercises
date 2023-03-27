/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Basic Functions
    Exercise 8: Dado un string, imprime las letras en posición impar utilizando un loop y console.log().
*/

function oddPositionLetter(string){
    console.log("Letras en posición impar:");
    for(let i=0; i<string.length; i++){
        if(i % 2 !== 0){
            console.log(string[i]);
        }
    }
}

oddPositionLetter("React");