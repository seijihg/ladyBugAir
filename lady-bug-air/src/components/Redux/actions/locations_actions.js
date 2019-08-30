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
export default { 
  loadSuggestions, 
  updateInputValue, 
  clearSuggestions,
  loadSuggestionsArrival, 
  updateInputValueArrival,
  dateFrom,
  dateTo,
  singleReturnState
};
