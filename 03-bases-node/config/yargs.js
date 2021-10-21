const argv =  require('yargs')
                .option('b',{
                    alias : 'base',
                    type : 'number',
                    demandOption:true,
                    describe : 'Es la base de la tabla de multiplicar'
                })
                .check( (argv, options) =>{
                    if ( isNaN( argv.b ) ) {
                        throw 'La base debe ser un número';
                    }
                    return true;
                })
                .option('h',{
                    alias : 'hasta',
                    type : 'number',
                    default: 10,
                    describe : 'Es el límite de la función'
                })
                .check( (argv, options) =>{
                    if ( isNaN( argv.h ) ) {
                        throw 'El límite debe ser un número';
                    }
                    return true;
                })
                .option('l',{
                    alias : 'listar',
                    type : 'boolean',
                    default : false,
                    describe : 'Muestra la tabla en consola'
                })
                .argv;

module.exports = {
    argv
}