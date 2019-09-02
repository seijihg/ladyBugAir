import API from "../../Api/Api";

const saveViewDealToState = offerId => {
  return dispatch => {
    dispatch({type: "LOADING_OFFER_DEAL"})
    API.makeOfferFlight(offerId)
    .then(deal => dispatch({type: "DEAL_RESULTS", deal}))
  }
}

export default {
  saveViewDealToState
}