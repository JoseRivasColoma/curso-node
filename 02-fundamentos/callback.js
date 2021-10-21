// setTimeout( () => console.log('Hola Mundo') , 1000);
//Función que se manda como argumento a otra función
const getUsuarioByID = (id, callback) =>{

    const usuario = {
        id,
        nombre: 'Nombre'
    }

    setTimeout( () => {
        callback(usuario)
    }, 1500)
}

getUsuarioByID( 10, ( usuario ) => {
    console.log( usuario.id, usuario.nombre );
} );