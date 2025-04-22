const express = require('express');
const { crearLinkAcortado, redirigirLink } = require('../controllers/link.controllers');
const router = express.Router()

router.post('/shorten', crearLinkAcortado)
router.get('/:shortCode', redirigirLink)

module.exports = router;