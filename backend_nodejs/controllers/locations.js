const Location = require('../models/location')

exports.getAirports = (req, res, next) => {
  Location.find({type: req.query.type})
  .then(locs => {
    res.status(200).json({locations: locs})
  })
}