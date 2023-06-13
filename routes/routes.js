const express = require('express');
const router = express.Router();

const controllers = require('../controllers/controllers.js');

// RUTAS DEL SERVIDOR CON LOS 4 TIPOS DE PETICIONES 
router.get('/', controllers.getRuta);
router.post('/', controllers.postRuta);
router.put('/', controllers.putRuta);
router.delete('/', controllers.deleteRuta);

// EXPORTAR LAS RUTAS
module.exports = router;