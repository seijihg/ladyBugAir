import API from "../../Api/Api";

//-----> UTILS
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getMatchingLanguages(value, suggestions) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");
  return suggestions.locations.filter(suggestion =>
    regex.test(suggestion.airport_name)
  );
}
//<-----END
//<-----SEARCH FLIGHTS
const searchFlights = (body) => {
  return dispatch => {
    dispatch({type:"SEARCHING_FLIGHTS"})
    API.searchFlights(body)
    .then(flights => dispatch({type: "SEARCH_FLIGHTS_RESULTS", flights}))
  }
}
//----->END
//----->DEPARTURE
const maybeUpdateSuggestions = (suggestions, value) => {
  return { type: "MAYBE_UPDATE_SUGGESTIONS", suggestions, value };
};

const loadSuggestions = value => {
  return dispatch => {
    dispatch({ type: "LOADING_SUGGESTIONS" });
    API.allLocations().then(suggestions =>
      dispatch(
        maybeUpdateSuggestions(getMatchingLanguages(value, suggestions), value)
      )
    );
  };
};

const updateInputValue = value => {
  return dispatch => {
    dispatch({ type: "UPDATE_INPUT_VALUE", value });
  };
};
const clearSuggestions = () => {
  return dispatch => {
    dispatch({ type: "CLEAR_SUGGESTIONS" });
  };
};
//<-----END
//----->ARRIVAL
const maybeUpdateSuggestionsArrival = (suggestions, value) => {
  return { type: "MAYBE_UPDATE_SUGGESTIONS_ARRIVAL", suggestions, value };
};

const loadSuggestionsArrival = value => {
  return dispatch => {
    dispatch({ type: "LOADING_SUGGESTIONS_ARRIVAL" });
    API.allLocations().then(suggestions =>
      dispatch(
        maybeUpdateSuggestionsArrival(getMatchingLanguages(value, suggestions), value)
      )
    );
  };
};
const updateInputValueArrival = value => {
  return dispatch => {
    dispatch({ type: "UPDATE_INPUT_VALUE_ARRIVAL", value });
  };
};
//<-----END
//----->DATE
const dateFrom = (date) => {
  return dispatch => {
    dispatch({ type: "UPDATE_DATEFROM", date });
  };
};
const dateTo = (date) => {
  return dispatch => {
    dispatch({ type: "UPDATE_DATETO", date });
  };
};
//<-----END
//<-----SINGLE RETURN
const singleReturnState = (single) => {
  return dispatch => {
    dispatch({type: "PICK_SINGLE", single})
  }
}
//<-----END
//<-----PEOPLE COUNT
const addAdult = () => {
  return dispatch => {
    dispatch({type: "ADD_ADULT"})
  }
}
const removeAdult = () => {
  return dispatch => {
    dispatch({type: "REMOVE_ADULT"})
  }
}
//<-----END
//<-----FLIGHT CLASS
const flightClass = (classtype) => {
  return dispatch => {
    dispatch({type: "CLASS_TYPE", classtype})
  }
}
//<-----END
export default { 
  loadSuggestions, 
  updateInputValue, 
  clearSuggestions,
  loadSuggestionsArrival, 
  updateInputValueArrival,
  dateFrom,
  dateTo,
  singleReturnState,
  addAdult,
  removeAdult,
  flightClass,
  searchFlights
};
