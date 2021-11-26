const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth',
            usuarios : '/api/usuarios',
            caterorias : '/api/categorias',
        }

        //Conectar a base de datos
        this.conectarDB();
        //Middlewares
        this.middlewares()

        //Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio público
        this.app.use( express.static('public') );
    }

    routes() {

        this.app.use(this.paths.auth, require('../routes/auth.routes'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios.routes'));
        this.app.use(this.paths.caterorias, require('../routes/categorias.routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log( 'Listening at port', this.port );
        });
    }


}


module.exports = Server;