const http = require('http');
// El método HTTP se gatilla con una función de callback
// La cual recibe el request y el response
// El listen es el puerto de escucha
http.createServer((req, res) => {
    res.write('Hola mundo');
}).listen( 8082 )

console.log('Escuchando en el puerto', 8082);