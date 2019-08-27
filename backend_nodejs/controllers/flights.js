const flightsAPI = require('../api_interface/api_flights')
const Flight = require('../models/flight')

exports.getAirports = (req, res, next) => {
    flightsAPI.getAirports()
    .then(airports => {res.status(200).json({airports: airports.data})})
}

exports.postFlights = (req, res, next) => { 
    const journeys = req.body.journeys
    const passengers = req.body.passengers
    const fareTypes = req.body.fareTypes
    
    const body = {
        journeys: journeys,
        passengers: passengers,
        fareTypes: fareTypes 
    }
    flightsAPI.searchFlights(body)
    .then(flights => res.status(201).json({flights: flights.data}))
}

exports.createBookFlight = (req, res, next) => {
    const offerId = req.body.offerId
    flightsAPI.offerFlight(offerId)
    .then(offer => {res.status(201).json({details: offer.data})})
}

exports.bookFlight = (req, res, next) => {
    const journeys = req.body.journeys
    const disclosures = req.body.disclosures
    const bagDisclosures = req.body.bagDisclosures
    const penalties = req.body.penalties
    const passengers = req.body.passengers
    const totalPrice = req.body.totalPrice
    const bookingId = req.body.bookingId

    const book = new Flight({
        journeys: journeys,
        disclosures: disclosures,
        bagDisclosures: bagDisclosures,
        penalties: penalties,
        passengers: passengers,
        totalPrice: totalPrice,
        bookingId: bookingId
    })
    book.save()
    .then(book => {
        res.status(201).json({
            message:"Booking Done",
            booking: book
        })
    })
}