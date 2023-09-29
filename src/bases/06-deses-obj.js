

// Desestructuración de objetos 
// Asignación Desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { edad, clave, nombre,} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const contexto = ({nombre, edad, clave, rango='Capitan'}) =>{
    
    // console.log(nombre,edad, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 15.24,
            lng: 10.20,
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = contexto(persona);

console.log(nombreClave,anios);
console.log(lat,lng);