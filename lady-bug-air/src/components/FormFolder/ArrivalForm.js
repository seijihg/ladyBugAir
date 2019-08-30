import React from "react";
import Autosuggest from "react-autosuggest";

const ArrivalForm = ({ suggestions, clearSuggestions, updateInputValue, loadSuggestions, value }) => {
  
  const getSuggestionValue = suggestion => {
    return suggestion.airport_name;
  };
  function renderSuggestion(suggestion) {
    return <span>{suggestion.airport_name}</span>;
  }
  const inputProps = {
    value, // usually comes from the application state
    onChange: updateInputValue,
    type: "search",
    placeholder: "Arrive at:"
  };

  return (
    <>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={loadSuggestions}
          onSuggestionsClearRequested={clearSuggestions}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
    </>
  );
};
export default ArrivalForm;
