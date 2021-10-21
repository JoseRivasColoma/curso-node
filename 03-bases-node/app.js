/**
 *  Aplicaciones profesionales de node
 *  .. npm init
 */

const { crearArchivoTabla } = require('./helpers/multiplicar');
const {argv} = require('./config/yargs');

console.clear();

 crearArchivoTabla(argv.b, argv.l, argv.h)
    .then( salida => console.log(salida.stripColors))
    .catch( err => console.log(err));




