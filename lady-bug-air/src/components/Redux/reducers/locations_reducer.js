const defaultState = {
  value: '',
  arrival_value: "",
  suggestions: [],
  isLoading: false,
  dateFrom: "",
  dateTo: "",
  notsingle: "return",
  people: [{type: "Adult"}],
  classType: "economy",
  searchResults: []
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
    case "MAYBE_UPDATE_SUGGESTIONS_ARRIVAL":
      console.log("MAYBE_UPDATE_SUGGESTIONS_ARRIVAL")
      if (action.value !== state.arrival_value) {
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
    case "UPDATE_INPUT_VALUE_ARRIVAL":
      return {
        ...state,
        arrival_value: action.value
      };
    case "UPDATE_DATEFROM":
      return {
        ...state,
        dateFrom: action.date
      };
    case "UPDATE_DATETO":
      return {
        ...state,
        dateTo: action.date
      };
    case "PICK_SINGLE":
      return {
        ...state,
        notsingle: action.single
      };
    case "ADD_ADULT":
      console.log("ADULT")
      return {
        ...state,
        people: [...state.people, {type: "Adult"}]
      }
    case "REMOVE_ADULT":
      const idx = state.people.findIndex(elem => elem.type === "Adult")
      return {
        ...state,
        people: state.people.filter((elem, i) => i !== idx)
      }
    case "CLASS_TYPE":
      return {
        ...state,
        classType: action.classtype
      }
    case "SEARCHING_FLIGHTS":
      console.log("SEARCHING_FLIGHTS")
      return {
        ...state,
        isLoading: true
      }
    case "SEARCH_FLIGHTS_RESULTS":
      console.log("SEARCH_FLIGHTS_RESULTS")
      console.log(action.flights)
      return {
        ...state,
        searchResults: action.flights.flights,
        isLoading: false
      }
    default:
      return state;
  }
};

export default locReducer;