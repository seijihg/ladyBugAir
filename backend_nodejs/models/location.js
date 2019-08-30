const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema (
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

module.exports = mongoose.model('Location', locationSchema)

// db.locations.updateOne({ "_id" : ObjectId("5d5f143e7216584c7ba312e0") }, 
//     { "$addToSet": { 
//         "airports": {
//             airport_name: "london stansted airport",
//             iata: "stn",
//             icao: "egss"
//         },
//     }}
// )

// db.locations.insertOne(
//   {
//     "city_name": "Hong Kong", 
//     "airport_name": "Hong Kong International Airport", 
//     "iata": "HKG", 
//     "icao": "VHHH"
//     }
// )
