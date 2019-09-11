const express = require('express')
const router = express.Router()
const flightsController = require('../controllers/flights')
const isLoggedIn = require('../middleware/isLoggedIn')

// GET /api_1/airports
router.post('/search', flightsController.postFlights)
router.post('/offer',flightsController.createBookFlight)
router.post('/book', isLoggedIn, flightsController.bookFlight)

module.exports = router

