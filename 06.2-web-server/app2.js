//HTTP
const http = require('http');
const port = 8080

http.createServer( (req, res)=> {
    res.writeHead(200, {'Content-Type': 'application/json'});

    const persona = {
        id: 1,
        nombre: 'Jose'
    }

    res.write(JSON.stringify(persona));
    res.end();
}).listen(port);

console.log('Escuchando en el puerto ', port);
