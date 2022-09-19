// THIS FILE (NETWORK.JS SOLO TRABAJA CON LA CAPA DE RED)

const express = require('express');

const response = require('../../../network/response');
const Controller = require ('./index');

const router = express.Router();

// Routes:
router.get('/', list)
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);


//Internal functions:
router.get('/', function (req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.get('/.id', function (req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, lista, 200);
        }).catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
})


module.exports = router;