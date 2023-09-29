
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 45345,
        lat: 14.234,
        lng: 34.545,
    }
};

//console.table(persona);


const persona2 = {...persona};
persona2.nombre= 'Peter';


console.log(persona);
console.log(persona2);