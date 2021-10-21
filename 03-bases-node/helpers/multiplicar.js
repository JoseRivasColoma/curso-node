//Importaciones desde file system (fs)
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 0, listar, hasta= 10) => {
    try {
        let salida = '';

        salida += '=============================== \n';
        salida += `Tabla del ${base} \n`;
        salida += '=============================== \n';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${i * base} \n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if (listar) {
            console.log( salida );
        }

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivoTabla
}





//Ejemplo de funcion writeFile
// fs.writeFile(`tabla-${ base }.txt`, salida, (err)=>{
//     if (err) throw err;

//     console.log(`tabla-${ base }.txt creado`);
// })