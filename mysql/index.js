const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');

const app = express();

app.use(bodyParser.json());

//Routers

app.listen(config.mysql_service.port, () => {
    console.log('Servicio de mysql escuchando en el puerto', )
})