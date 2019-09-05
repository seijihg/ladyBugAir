const flightsAPI = require("../api_interface/api_flights");
const Flight = require("../models/flight");
const User = require("../models/user");

exports.postFlights = (req, res, next) => {
  const journeys = req.body.journeys;
  const passengers = req.body.passengers;
  const fareTypes = req.body.fareTypes;

  const body = {
    journeys: journeys,
    passengers: passengers,
    fareTypes: fareTypes
  };
  flightsAPI
    .searchFlights(body)
    .then(flights => res.status(201).json({ flights: flights.data }));
};

exports.createBookFlight = (req, res, next) => {
  const offerId = req.body.offerId;
  flightsAPI.offerFlight(offerId).then(offer => {
    res.status(201).json({ details: offer.data });
  });
};

exports.bookFlight = (req, res, next) => {
  const details = req.body.details;
  const passengers = req.body.passengers;
  const book = new Flight({
    details: details,
    passengers: passengers,
    user: req.userId
  });
  book
    .save()
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      user.bookings.push(book)
      return user.save()
    })
    .then(user => {
      res.status(201).json({
        message: "Booking Done",
        booking: book
      });
    })
    .catch(err => console.log(err));
};
