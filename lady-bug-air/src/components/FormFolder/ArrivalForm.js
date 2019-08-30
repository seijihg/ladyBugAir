import React from "react";
import Autosuggest from "react-autosuggest";

const ArrivalForm = ({ suggestions, preventSubmit, clearSuggestions, updateInputValue, loadSuggestions, value }) => {
  
  const getSuggestionValue = suggestion => {
    return (`${suggestion.airport_name} (${suggestion.iata})`)
  };
  const renderSuggestion = (suggestion) => {
    return <span>{`${suggestion.airport_name} (${suggestion.iata})`}</span>;
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
          onSuggestionSelected={preventSubmit}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
    </>
  );
};
export default ArrivalForm;
