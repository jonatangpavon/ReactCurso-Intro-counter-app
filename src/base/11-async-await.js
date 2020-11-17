

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );
const getPetcion = async() =>{
    try{
        const peticion = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 
         // se espera
         const data = await peticion.json();
         console.log(data);
    }catch (error){
         console.error(error);
     }
 }
 
 //Para manejar el error hay que usar try y catch...
 
 getPetcion();



