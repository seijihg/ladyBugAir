import API from "../../Api/Api";

//-----> UTILS
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getMatchingLanguages(value, suggestions) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');
  return suggestions.locations.filter(suggestion => regex.test(suggestion.airport_name));
}

const maybeUpdateSuggestions = (suggestions, value) => {
  return {type: "MAYBE_UPDATE_SUGGESTIONS", suggestions, value}
}
//<-----END

const loadSuggestions = (value) => {
  return dispatch => {
    dispatch({ type: "LOADING_SUGGESTIONS" });
    API.allLocations().then(suggestions =>
      dispatch(maybeUpdateSuggestions(getMatchingLanguages(value, suggestions), value) )
    );
  };
};

const updateInputValue = value => {
  return dispatch => {
    dispatch({type: "UPDATE_INPUT_VALUE", value})
  }
}
const clearSuggestions = () => {
  return dispatch => {
    dispatch({type: "LOAD_SUGGESTIONS_BEGIN"})
  }
}
export default { loadSuggestions, updateInputValue, clearSuggestions };
