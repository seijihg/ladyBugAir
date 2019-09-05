const express = require('express')
const router = express.Router()
const locationController = require('../controllers/locations')

router.get('/airports', locationController.getAirports)

module.exports = router