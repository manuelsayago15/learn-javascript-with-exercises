/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    Basic Functions
    Exercise 9: Dado un string, cuenta cuántas veces aparece una letra específica utilizando un loop y console.log().
*/

function letterCount(string, letter) {
    let count = 0;
    letterLowerCase = letter.toLowerCase();
    for(let i=0; i<string.length; i++){
        if(string[i].toLowerCase() === letterLowerCase){
            count++
        }
    }
    return count;
}

console.log(letterCount("Angular", "a"))

/* 
También podríamos resolver este ejercicio con el método reduce

function letterCount(string, letter) {
  const letterLowerCase = letter.toLowerCase();
  return [...string].reduce((count, char) => {
    if (char.toLowerCase() === letterLowerCase) {
      count++;
    }
    return count;
  }, 0);
}

console.log(letterCount("Angular", "a"));
*/