const express = require('express');
const rota = express.Router();
const pedidosController = require('../controllers/pedidosController');

rota.get('/pedidos', pedidosController.listar);
rota.get('/pedidos/resumoStatus', pedidosController.resumoStatus);
rota.get('/pedidos/totalVendas', pedidosController.totalVendas);

module.exports = rota;
