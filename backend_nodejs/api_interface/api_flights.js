const axios = require('axios')

const urlAirports = 'https://pubapi.atadi.vn/air/test/getresourcebykey/air_originlist'
const urlFlights = 'https://sandbox.api.gokyte.com/api/flights/search'
const urlBookFlight = 'https://sandbox.api.gokyte.com/api/flights/offer'

exports.getAirports = () => {
    return axios({
        url: urlAirports,
        headers: {
            'Authorization': process.env.API_AIRPORT,
            'Content-Type': 'application/json'
        }
    })
}

exports.searchFlights = (body) => {
    return axios({
        method: 'POST',
        url: urlFlights,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.API_FLIGHTS
        },
        data: body
    })
}

exports.offerFlight = (offerId) => {
    return axios({
        method: 'POST',
        url: urlBookFlight,
        headers: {
            'x-api-key': process.env.API_FLIGHTS
        },
        data: {offerId}
    })
}