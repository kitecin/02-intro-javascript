
const  nombre = 'Ruben';
const appelido = 'Gonzalez';

const nombreCompleto = `
${nombre} 
${appelido}
${1+1}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola '+nombre;
}

console.log (`Este es un texto ${getSaludo(nombre)} `);