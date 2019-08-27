const express = require('express')
const router = express.Router()
const flightsController = require('../controllers/flights')

// GET /api_1/airports
router.get('/airports', flightsController.getAirports)
router.post('/search', flightsController.postFlights)
router.post('/offer',flightsController.createBookFlight)
router.post('/book', flightsController.bookFlight)

module.exports = router

