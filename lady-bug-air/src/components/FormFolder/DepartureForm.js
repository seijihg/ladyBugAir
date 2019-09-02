import React from "react";
import Autosuggest from "react-autosuggest";

const DepartureForm = ({ suggestions, preventSubmit, clearSuggestions, updateInputValue, loadSuggestions, value }) => {
  
  const getSuggestionValue = suggestion => {
    return (`${suggestion.airport_name} ${suggestion.iata.toUpperCase()}`)
  };
  const renderSuggestion = (suggestion) => {
    return <span>{`${suggestion.airport_name} (${suggestion.iata})`}</span>;
  }
  const inputProps = {
    value, // usually comes from the application state
    onChange: updateInputValue,
    type: "search",
    placeholder: "Depart from:"
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
export default DepartureForm;
