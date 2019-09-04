const defaultState = {
  details: null,
  isLoading: false,
  passengers: [],
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
    case "ADD_OBJ_CONTROLLED_INPUT":
      return {
        ...state,
        passengers: [...state.passengers, action.obj]
      }
    case "INPUT_TYPE":
      return {
        ...state,
        passengers: state.passengers.map((pass, idx) => {
          if (idx === action.title.idx) {pass.title = action.title.title}
          return pass
        })
      }
    default:
      return state
  }
}

export default offerCardReducer