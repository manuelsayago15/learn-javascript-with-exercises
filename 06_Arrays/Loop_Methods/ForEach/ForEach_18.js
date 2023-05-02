/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 18: Iterar sobre un array de objetos y crear un nuevo array solo con los valores de dos propiedades específicas.
*/

const array = [
    {
        name: 'Manuel',
        lastname: 'Sayago',
        age: 32,
        user: 'msayago',
        hobbie: 'Football',
        email: 'example@example.com'
    },
    {
        name: 'Link',
        lastname: false,
        age: 120,
        user: 'link_botw',
        hobbie: 'Killing Bokoblins and related species',
        email: false
    },
    {
        name: 'Zelda',
        lastname: false,
        age: 120,
        user: 'totk',
        hobbie: 'Waiting for Link',
        email: false
    }
]

const userArray = [];
const hobbyArray = [];

const values = array.forEach(item => {
    userArray.push(item.user);
    hobbyArray.push(item.hobbie);
});
console.log(userArray);
console.log(hobbyArray);