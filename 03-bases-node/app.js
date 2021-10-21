
const { crearArchivoTabla } = require('./helpers/multiplicar');

//Limpia la consola
console.clear();

crearArchivoTabla(1564)
    .then( salida => console.log(salida))
    .catch( err => console.log(err));




