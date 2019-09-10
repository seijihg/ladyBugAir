const express = require('express')
const router = express.Router()
const logoController = require('../controllers/logos')

router.get('/logos', logoController.getLogos)

module.exports = router