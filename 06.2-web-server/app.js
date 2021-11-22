const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const hbs = require('hbs');

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jose',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jose',
        titulo: 'Curso de Node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jose',
        titulo: 'Curso de Node'
    });
});

//Sintaxis para derivar cuando no hay manejador para la ruta
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Aplicación corriendo en http://localhost:${port}`);
});