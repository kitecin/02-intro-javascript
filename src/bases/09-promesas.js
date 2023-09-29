// Promesas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import {getHeroeById} from './08-imp-exp'


// const promesa = new Promise ( (resolve,reject) =>{

//     setTimeout(() => {
//         //console.log('2 segundos despues');
//         // resolve();
//         // Tarea
//         // Importar el metodo getHeroeById del ejercicio 08-imp-exp.js

//         const heroe = getHeroeById(2);
//         //resolve(heroe);
//         reject ('No se pudo encontrar el héroe');
        
//     }, 2000);

// });

// promesa.then((heroe)=>{
//     console.log('Heroe', heroe);
// })
// .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {

    return new Promise ( (resolve,reject) =>{

        setTimeout(() => {
            //console.log('2 segundos despues');
            // resolve();
            // Tarea
            // Importar el metodo getHeroeById del ejercicio 08-imp-exp.js
    
            const heroe = getHeroeById(id);
            if (heroe)
            resolve(heroe);
            else
            reject ('No se pudo encontrar el héroe');
            
        }, 2000);
    
    });
    
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn);