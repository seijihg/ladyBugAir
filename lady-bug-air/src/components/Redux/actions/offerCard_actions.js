import API from "../../Api/Api";

const saveViewDealToState = offerId => {
  return dispatch => {
    dispatch({type: "LOADING_OFFER_DEAL"})
    API.makeOfferFlight(offerId)
    .then(deal => dispatch({type: "DEAL_RESULTS", deal}))
  }
}
const savePassengersToState = passengers => {
  return dispatch => {
    dispatch({type: "ADD_PASSENGERS", passengers})
  }
}
const addPassengerInputController = (obj) => {
  return dispatch => {
    dispatch({type:"ADD_OBJ_CONTROLLED_INPUT", obj})
  }
}
const onChangeInputFields = (obj) => {
  return dispatch => {
    dispatch({type:"INPUT_FIELDS", obj})
  }
}
  export default {
    saveViewDealToState,
    savePassengersToState,
    addPassengerInputController,
    onChangeInputFields
  }