import React from 'react'
import DepartureForm from './DepartureForm';
import ArrivalForm from './ArrivalForm';
import {connect} from 'react-redux'
import loc_actions from '../Redux/actions/locations_actions'
import FlightDates from './FlightDates';
import SingleReturnSelect from './SingleReturnSelect';

class FormContainer extends React.Component {
    preventSubmit = (event, {method}) => {
        if (method === "enter") {return event.preventDefault()}
    }
    onChangeDateDepartureHandler = (event) => {
        this.setState({
            departure: event.target.value
        })
    }
    onChangeDateArrivalHandler = (event) => {
        this.setState({
            arrival: event.target.value
        })
    }
    dateFromHandler = (event) => {
        const { updateDateFrom } = this.props
        const date = event.target.value
        updateDateFrom(date)
    }
    dateToHandler = (event) => {
        const { updateDateTo } = this.props
        const date = event.target.value
        updateDateTo(date)
    }
    submitSearchHandler = (event) => {
        event.preventDefault()
        console.log("clicked")
    }
    onChangeSingleReturnHandler = (event) => {
        console.log("changed")
    }

    render() {
        const { value, dateFrom, dateTo, arrival_value, isLoading, loadSuggestions, clearSuggestions, updateInputValue, suggestions, loadSuggestionsArrival, updateInputValueArrival } = this.props

        const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

        return(
            <div>
                <form onSubmit={this.submitSearchHandler}>
                    <h1>Search Flights and Book!</h1>
                    <h2>Status: {status}</h2>
                    <SingleReturnSelect singleReturnState={this.onChangeSingleReturnHandler}/>
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
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { notsingle, value, arrival_value, suggestions, isLoading, dateFrom, dateTo } = state.locReducer
    return {
        value,
        arrival_value,
        suggestions,
        isLoading,
        dateFrom,
        dateTo,
        notsingle
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSuggestions: ({value}) => dispatch(loc_actions.loadSuggestions(value)),
        clearSuggestions: () => dispatch(loc_actions.clearSuggestions()),
        updateInputValue: (event, {newValue}) => dispatch(loc_actions.updateInputValue(newValue)),
        loadSuggestionsArrival: ({value}) => dispatch(loc_actions.loadSuggestionsArrival(value)),
        updateInputValueArrival: (event, {newValue}) => dispatch(loc_actions.updateInputValueArrival(newValue)),
        updateDateFrom: (date) => dispatch(loc_actions.dateFrom(date)),
        updateDateTo: (date) => dispatch(loc_actions.dateTo(date)),
        singleReturnState: (single) => dispatch(loc_actions.singleReturnState(single))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FormContainer)