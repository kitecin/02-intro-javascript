

// Desestructuracion de arrays

const personajes = ['Goku','Vegeta','Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);
const [,,p3] = personajes;
console.log(p3);


const retornaArray= () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArray();
console.log(letras,numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamara setNombre

const estado = (valor) =>{
    return [valor,()=>{console.log('Hola Mundo')}];
}

// const arr = estado ('Goku');
// console.log(arr);
// arr[1]();

const [nombre,setNombre] = estado ('Goku');

console.log(nombre);
setNombre();