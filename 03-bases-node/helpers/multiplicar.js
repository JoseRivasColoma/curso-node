//Importaciones desde file system (fs)
const fs = require('fs');

const crearArchivoTabla = async (base = 0) => {
    try {
        let salida = '';
        salida += '===============================`\n';
        salida += `Tabla del ${base} \n`;
        salida += '=============================== \n';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${i * base} \n`;
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch ( err ) {
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