//Creando servidor

//llama a paquete http
const http = require('http');

http.createServer((req, resp) => {
        resp.write('Hola mundo');
        resp.end();
    })
    .listen(8080);

console.log('Escuchando puerto 8080');