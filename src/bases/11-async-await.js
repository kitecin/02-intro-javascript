
// Async 

// Promesa basica
// const getImagenPromesa = ()=>{
//     const promesa = new Promise ((resolve,reject) => {
//         resolve ('https://asdfasdfsdf.com');
//     })
//     return promesa;
// }

// Promesa acortada
// const getImagenPromesa = ()=> 
// new Promise (resolve => resolve ('https://asdfasdfsdf.com'))


// Utilizando Async

// const getImagenPromesa = async () =>{
//     return 'https://asdfasdfsdf.com'
// }


// getImagenPromesa();



// Utilizando Async Await basado en el ejercicio previo

const getImagenPromesa = async () =>{

    try {
    const apiKey='PbfybqLaeyyQpyglAaMsiANgx6ooqS6X';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    const {data}= await resp.json();
    const {url}= data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

    console.log(url);

    } catch (error) {
        //manejo del error
        console.error(error);
    }
    
}
getImagenPromesa();






// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

// const apiKey='PbfybqLaeyyQpyglAaMsiANgx6ooqS6X';


// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
// .then (resp => resp.json())
// .then(({data}) => {
//     const {url}= data.images.original;


//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img);
//     console.log(url);

// })
// .catch(console.warn);