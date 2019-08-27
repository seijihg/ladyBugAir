const Location = require('../models/location')

exports.getLocations = (req, res, next) => {
  Location.find()
  .then(locs => {
    res.status(200).json({locations: locs})
  })
}