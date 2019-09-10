import React from "react";
import Autosuggest from "react-autosuggest";

const DepartureForm = ({ suggestions, preventSubmit, clearSuggestions, updateInputValue, loadSuggestions, value }) => {
  
  const getSuggestionValue = suggestion => {
    return (`${suggestion.name} ${suggestion.iata_code.toUpperCase()}`)
  };
  const renderSuggestion = (suggestion) => {
    return <span><i class="fas fa-plane"></i>{`${suggestion.name} (${suggestion.iata_code})`}</span>;
  }
  const inputProps = {
    value, // usually comes from the application state
    onChange: updateInputValue,
    type: "search",
    placeholder: "Depart from:"
  };

  return (
    <div className="autosuggest_depature">
    <Autosuggest 
      suggestions={suggestions}
      onSuggestionsFetchRequested={loadSuggestions}
      onSuggestionsClearRequested={clearSuggestions}
      onSuggestionSelected={preventSubmit}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps} 
    />
    </div>
  );
};
export default DepartureForm;
