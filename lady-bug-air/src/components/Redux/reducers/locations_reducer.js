import { uniq } from "lodash"


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
  searchResults: [],
  logoList: []
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
      const level1 = action.flights.flights.flights
      const level2 = level1.map(elem=>elem.flightSegments)
      const flattened = [].concat.apply([],level2)
      const logosList= flattened.map(elem => elem.marketingCarrier.airlineId)
      const filtered = uniq(logosList)
      // const results = Promise.all(logoList.map(logo => API.getLogo(logo)))
      // .then(data => {
      //   return data.map(lg => lg.data !== "" ? lg.data[0].logo : lg.data)
      // })
      
      return {
        ...state,
        searchResults: action.flights.flights,
        isLoading: false,
        logoList: filtered
      }
      case "LOGO_LOADING":
        return {
          ...state,
          isLoading: true
        }
      case "LOGO_LOADED":
        debugger
        return {
          ...state,
          logoList: [...state.logoList, action.logo],
          isLoading: false
        }
    default:
      return state;
  }
};

export default locReducer;