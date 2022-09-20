//this network.js will allow us to create all of the necessary tables
const express = require('express');

const response = require('../../../network/response');
const Store = require('../store/mysql');

const router = express.Router();

//routers:
router.get('/:tabla',list);
router.get('/:tabla/:id', get);
router.post('/:tabla', insert);
router.post('/:tabla', upsert);


async function list(req, res, next) {
    const datos = await Store.list(req.params.table)
    response.success('req, res, datos, 200');
}

async function get(req, res, next) {
    const datos = await Store.get(req.params.table, req.params.id)
    response.success('req, res, datos, 200');
}

async function insert(req, res, next) {
    const datos = await Store.insert(req.params.table, req.body)
    response.success('req, res, datos, 200');
}

async function upsert(req, res, next) {
    const datos = await Store.upsert(req.params.table, req.body)
    response.success('req, res, datos, 200');
}


//con esto tenemos el primero modulo creado


module.exports = router;