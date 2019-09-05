const baseApi = "http://localhost:8080";
const logInApi = baseApi + "/auth/login";
const locationsBase = baseApi + "/api_v1/airports?type=large_airport";
const searchApi = baseApi + "/api_v1/search";
const offerApi = baseApi + "/api_v1/offer"
const authenticateApi = baseApi + "/auth/authenticate"
const createUserApi = baseApi + "/api_v1/users"
const bookFlightApi = baseApi + "/api_v1/book"

//--> Locations
const allLocations = () => {
  return fetch(locationsBase).then(resp => resp.json());
};
//<--
const searchFlights = body => {
  return fetch(searchApi, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(resp => resp.json())
};
const makeOfferFlight = offerId => {
  return fetch(offerApi, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      offerId: offerId
    })
  })
  .then(resp => resp.json())
}
const createUser = (userBody) => {
  return fetch(createUserApi, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userBody)
  })
}

const authenticateUser = (token) => {
  return fetch(authenticateApi, {
    headers: {
      Authorization: "Bearer " + token
    }
  })
  .then(resp => resp.json())
}
const bookFlight = (bookFlightBody, token) => {
  return fetch(bookFlightApi, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(bookFlightBody)
  })
}


export default {
  logInApi,
  allLocations,
  searchFlights,
  makeOfferFlight,
  authenticateUser,
  createUser,
  bookFlight
};
