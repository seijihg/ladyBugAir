const logInApi = 'http://localhost:8080/auth/login'
const locationsBase = 'http://localhost:8080/api_v1/locations'

//--> Locations
const allLocations = () => {
  return fetch(locationsBase)
  .then(resp => resp.json())
}
//<--

export default = {
  logInApi,
  allLocations
}