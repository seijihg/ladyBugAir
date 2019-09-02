const baseApi = "http://localhost:8080";
const logInApi = baseApi + "/auth/login";
const locationsBase = baseApi + "/api_v1/locations";
const searchApi = baseApi + "/api_v1/search";
const offerApi = baseApi + "/api_v1/offer"

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
export default {
  logInApi,
  allLocations,
  searchFlights,
  makeOfferFlight
};
