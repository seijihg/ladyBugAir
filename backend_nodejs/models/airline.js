const mongoose = require('mongoose')
const Schema = mongoose.Schema

const airlineSchema = new Schema ({
  airline_name: {
    type: String,
    required: true,
    lowercase: true
  },
  airline_id: {
    type: String,
    required: true,
    lowercase: true
  },
  bookings: {
    type: Schema.Types.ObjectId,
    ref: 'Flight'
  },
  aircrafts: [{
    name: {
      type: String,
      required: true,
      lowercase: true
    },
    code: {
      type: Integer,
      required: true,
      lowercase: true
    }
  }],
  
}, {timestamps: true})

module.exports = mongoose.model('Airline', airlineSchema)