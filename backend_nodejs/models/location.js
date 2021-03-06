const mongoose = require('mongoose')
const Schema = mongoose.Schema

const airportSchema = new Schema (
  {
    city_name: {
      type: String,
  },
    airport_name: {
      type: String,
      unique: true
    },
    iata: {
      type: String,
      unique: true
    },
    icao: {
      type: String,
      unique: true
    }
  }, {timestamps: true}
)

module.exports = mongoose.model('Airport', airportSchema)