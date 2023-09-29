import {getHeroeById} from './bases/08-imp-exp'
import heroes from './data/heroes';


// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const heroe = getHeroeById(13);
//         console.log(heroe);

//         resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            console.log(heroe);
            if (heroe)
            resolve(heroe);
            else
            reject('No se pudo encontrar el heroe');
        }, 2000);
    })

}


getHeroeByIdAsync(14)
    .then(console.log)
    .catch(console.warn);