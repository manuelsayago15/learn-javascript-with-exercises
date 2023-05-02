/*
    @author Manuel Sayago
    @copyright Copyright © 2023 Manuel Sayago
    @license https://www.gnu.org/licenses/gpl.txt
*/

/*
    ForEach
    Exercise 12: Iterar sobre un array de objetos y mostrar solo los que tengan una propiedad específica que sea un string.
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

const value = array.forEach(item => {
    if (typeof item.user === 'string') {
        console.log(item);
    }
});

/*
La solución es óptima y cumple con los requisitos de iterar sobre un array de objetos y mostrar solo aquellos que tengan una propiedad específica que sea un string. 
Usar el operador typeof para verificar que la propiedad sea una cadena es una buena forma de asegurarse de que solo se muestren los objetos que cumplan con este criterio.
*/