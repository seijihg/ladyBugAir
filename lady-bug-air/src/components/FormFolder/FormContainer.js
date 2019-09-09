import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import DepartureForm from "./DepartureForm";
import ArrivalForm from "./ArrivalForm";
import loc_actions from "../Redux/actions/locations_actions";
import FlightDates from "./FlightDates";
import SingleReturnSelect from "./SingleReturnSelect";
import PeopleCount from "./PeopleCount";
import FlightClass from "./FlightClass";

class FormContainer extends React.Component {
  preventSubmit = (event, { method }) => {
    if (method === "enter") {
      return event.preventDefault();
    }
  };
  onChangeDateDepartureHandler = event => {
    this.setState({
      departure: event.target.value
    });
  };
  onChangeDateArrivalHandler = event => {
    this.setState({
      arrival: event.target.value
    });
  };
  dateFromHandler = event => {
    const { updateDateFrom } = this.props;
    const date = event.target.value;
    updateDateFrom(date);
  };
  dateToHandler = event => {
    const { updateDateTo } = this.props;
    const date = event.target.value;
    updateDateTo(date);
  };
  submitSearchHandler = event => {
    event.preventDefault();
    const {
      searchFlights,
      people,
      notsingle,
      classType,
      value,
      arrival_value,
      dateFrom,
      dateTo
    } = this.props;
    const departure = {
      departureAirport: value.split(" ").pop(),
      arrivalAirport: arrival_value.split(" ").pop(),
      departureDate: dateFrom,
      ticketTypes: [classType]
    };
    const journeys = () => {
      if (notsingle === "single") {
        return [departure];
      } else if (notsingle === "return") {
        return [
          departure,
          {
            departureAirport: arrival_value.split(" ").pop(),
            arrivalAirport: value.split(" ").pop(),
            departureDate: dateTo,
            ticketTypes: [classType]
          }
        ];
      }
    };
    const body = {
      journeys: journeys(),
      passengers: people,
      fareTypes: "lowest"
    };
    console.log(body);
    searchFlights(body);
    this.props.history.push("/search_results")
  };
  onChangeSingleReturnHandler = event => {
    const { singleReturnState } = this.props;
    singleReturnState(event.target.value);
  };
  addAdultHandler = () => {
    const { addAdult } = this.props;
    addAdult();
  };
  removeAdultHandler = () => {
    const { removeAdult, people } = this.props;
    if (people.length <= 1) {
      return;
    }
    removeAdult();
  };
  flightClassHandler = event => {
    this.props.flightClass(event.target.value);
  };

  render() {
    const {
      notsingle,
      classType,
      value,
      people,
      dateFrom,
      dateTo,
      arrival_value,
      isLoading,
      loadSuggestions,
      clearSuggestions,
      updateInputValue,
      suggestions,
      loadSuggestionsArrival,
      updateInputValueArrival
    } = this.props;

    const status = isLoading ? "Loading..." : "Type to load suggestions";

    return (
      <div className="form_container">
        <form onSubmit={this.submitSearchHandler}>
          <div className="h1_for">
            <h1>Search Flights and Book!</h1>
          </div>
          
          <div className="search_options">
            <SingleReturnSelect
              singleReturnState={this.onChangeSingleReturnHandler}
              notsingle={notsingle}
            />
            <FlightClass
              classType={classType}
              flightClassHandler={this.flightClassHandler}
            />
            <PeopleCount
              addAdultHandler={this.addAdultHandler}
              removeAdultHandler={this.removeAdultHandler}
              count={people}
            />
          </div>
          <div className="depature_container">
            <DepartureForm
              loadSuggestions={loadSuggestions}
              clearSuggestions={clearSuggestions}
              updateInputValue={updateInputValue}
              suggestions={suggestions}
              preventSubmit={this.preventSubmit}
              value={value}
            />
            <ArrivalForm
              loadSuggestions={loadSuggestionsArrival}
              clearSuggestions={clearSuggestions}
              updateInputValue={updateInputValueArrival}
              suggestions={suggestions}
              preventSubmit={this.preventSubmit}
              value={arrival_value}
            />
            <FlightDates
              dateFromHandler={this.dateFromHandler}
              dateFrom={dateFrom}
              dateToHandler={this.dateToHandler}
              dateTo={dateTo}
            />
            <br></br>
            <button type="submit" className="btn btn-search"><i class="fas fa-search fa-2x"></i></button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const {
    notsingle,
    classType,
    people,
    value,
    arrival_value,
    suggestions,
    isLoading,
    dateFrom,
    dateTo
  } = state.locReducer;
  return {
    value,
    arrival_value,
    suggestions,
    isLoading,
    dateFrom,
    dateTo,
    notsingle,
    people,
    classType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSuggestions: ({ value }) =>
      dispatch(loc_actions.loadSuggestions(value)),
    clearSuggestions: () => dispatch(loc_actions.clearSuggestions()),
    updateInputValue: (event, { newValue }) =>
      dispatch(loc_actions.updateInputValue(newValue)),
    loadSuggestionsArrival: ({ value }) =>
      dispatch(loc_actions.loadSuggestionsArrival(value)),
    updateInputValueArrival: (event, { newValue }) =>
      dispatch(loc_actions.updateInputValueArrival(newValue)),
    updateDateFrom: date => dispatch(loc_actions.dateFrom(date)),
    updateDateTo: date => dispatch(loc_actions.dateTo(date)),
    singleReturnState: single =>
      dispatch(loc_actions.singleReturnState(single)),
    addAdult: () => dispatch(loc_actions.addAdult()),
    removeAdult: () => dispatch(loc_actions.removeAdult()),
    flightClass: class_type => dispatch(loc_actions.flightClass(class_type)),
    searchFlights: body => dispatch(loc_actions.searchFlights(body))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (withRouter(FormContainer));
