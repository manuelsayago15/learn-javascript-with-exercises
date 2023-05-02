/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 3: Iterar sobre un array de objetos y mostrar solo un valor de cada objeto en la consola.
*/

const array = [
    {
        name: 'Manuel',
        lastname: 'Sayago',
        user: 'msayago',
        hobbie: 'Football',
        email: 'example@example.com'
    },
]

const value = array.forEach(item =>{
    console.log(item.user);
})