const express = require('express')
const app = express();

//obtener puerto de heroku
const port = process.env.PORT || 3000;

//proceso para parciales hbs 1
const hbs = require('hbs');

//proceso para parciales hbs 2
hbs.registerPartials(__dirname + '/views/parciales');
//servir página estática
app.use(express.static(__dirname + '/public'));
//helperes funciones que se cargan en el hbs
require('./helpers/helpers');


//Express hbs engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hello World')
    res.render('home', {
        nombre: 'Abel'
    });
});

app.get('/about', (req, res) => {
    // res.send('Hello World')
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})