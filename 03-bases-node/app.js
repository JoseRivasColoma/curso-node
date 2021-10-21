
const { crearArchivoTabla } = require('./helpers/multiplicar');

//Limpia la consola
console.clear();

//Recibir argumentos consola
console.log(process.argv)
//Tiene inconvenientes debido al escaso control sobre los parametros
//Esto es demasiado volatil
const [,,arg3='base=5'] = process.argv;
const [, base = 5] = arg3.split('=')

console.log(base);


crearArchivoTabla(base)
    .then( salida => console.log(salida))
    .catch( err => console.log(err));




