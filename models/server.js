const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares() {
        // Directorio Publico
        this.app.use(express.static('public'));

        // Parseo y Lectura del Body
        this.app.use(express.json());

        // CORS
        this.app.use(cors())
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.js'));
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server listening in port ${this.port}`));
    }


}

module.exports = Server;