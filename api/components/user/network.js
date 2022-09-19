// THIS FILE (NETWORK.JS SOLO TRABAJA CON LA CAPA DE RED)

const express = require('express');

const response = require('../../../network/response');

const router = express.Router();

router.get('/', function (req, res) {
    response.success(req, res, 'Todo correcto', 200);
})

module.exports = router;