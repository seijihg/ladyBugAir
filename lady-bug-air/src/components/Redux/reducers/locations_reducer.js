const defaultState = {
  value: '',
  arrival_value: "",
  suggestions: [],
  isLoading: false
};

const locReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING_SUGGESTIONS":
      console.log("LOADING_SUGGESTIONS")
      return {
        ...state,
        isLoading: true
      }
    case "MAYBE_UPDATE_SUGGESTIONS":
      console.log("MAYBE_UPDATE_SUGGESTIONS")
      console.log(action)
      if (action.value !== state.value) {
        return {
          ...state,
          isLoading: false
        };
      }

      return {
        ...state,
        suggestions: action.suggestions,
        isLoading: false
      };
    case "UPDATE_INPUT_VALUE":
    return {
      ...state,
      value: action.value
    };
    case "CLEAR_SUGGESTIONS":
        return {
          ...state,
          suggestions: []
        };
    default:
      return state;
  }
};

export default locReducer;