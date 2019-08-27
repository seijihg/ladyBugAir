const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema (
  {
    city_name: {
      type: String,
      lowercase: true
    },
    airports: [{
      airport_name: {
        type: String,
        lowercase: true,
        unique: true
      },
      iata: {
        type: String,
        lowercase: true,
        unique: true
      },
      icao: {
        type: String,
        lowercase: true,
        unique: true
      }
    }]
  }, {timestamps: true}
)

module.exports = mongoose.model('Location', locationSchema)