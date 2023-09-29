

// https://gist.github.com/Klerith/4aeb99d31aedbc29ff4d54bbb77d2d7f
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

import heroes,{owners} from "../data/heroes";


// import {heroes} from './data/heroes';
// import {heroes} from './data/heroes';


// const getHeroeById = (id) =>{
//     return heroes.find((heroe) => heroe.id === id);
// }

// Más optimizado
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id); 

// console.log(getHeroeById(2));

// find?, filter
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner); 

// console.log(getHeroeByOwner('DC'));
