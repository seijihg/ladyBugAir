const express = require('express')
const router = express.Router()
const locationController = require('../controllers/locations')

router.get('/locations', locationController.getLocations)

module.exports = router