const express = require('express');
const router = express.Router();

const tiendaController = require('../controllers/tiendaController');

router.get('/tienda_public', tiendaController.tienda_public);
router.get('/inicio_sesion', tiendaController.inicio_sesion);

router.get('/tienda/index', tiendaController.index);
router.get('/tienda/new', tiendaController.new);
router.post('/tienda', tiendaController.create);
router.get('/tienda/:id', tiendaController.show);
router.get('/tienda_public/:id', tiendaController.show_public);
router.get('/tienda/:id/edit', tiendaController.edit);
router.post('/tienda/:id', tiendaController.update);
router.post('/tienda/:id/delete', tiendaController.delete);

module.exports = router;
