const defaultState = {
  details: null,
  isLoading: false
}

const offerCardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING_OFFER_DEAL":
      console.log("LOADING_OFFER_DEAL")
      return {
        ...state,
        isLoading: true
      }
    case "DEAL_RESULTS":
      console.log("DEAL_RESULTS")
      console.log(action.deal)
      return {
        ...state,
        isLoading: false,
        details: action.deal.details
      }
    default:
      return state
  }
}

export default offerCardReducer