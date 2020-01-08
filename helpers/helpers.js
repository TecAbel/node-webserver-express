const hbs = require('hbs');
//helperes funciones que se cargan en el hbs
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});