import React from 'react'
import DepartureForm from './DepartureForm';
import ArrivalForm from './ArrivalForm';
import {connect} from 'react-redux'
import loc_actions from '../Redux/actions/locations_actions'
import FlightDates from './FlightDates';

class FormContainer extends React.Component {

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

    render() {
        const { value, arrival_value, loadSuggestions, clearSuggestions, updateInputValue, suggestions } = this.props
        return(
            <div>
                <form>
                    <h1>Search Flights and Book!</h1>
                    <DepartureForm
                        loadSuggestions={loadSuggestions}
                        clearSuggestions={clearSuggestions}
                        updateInputValue={updateInputValue}
                        suggestions={suggestions}
                        value={value}
                    />
                    <ArrivalForm
                        loadSuggestions={loadSuggestions}
                        clearSuggestions={clearSuggestions}
                        updateInputValue={updateInputValue}
                        suggestions={suggestions}
                        value={arrival_value}
                    />
                    <FlightDates />
                    <br></br>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { value, arrival_value, suggestions, isLoading } = state.locReducer
    return {
        value,
        arrival_value,
        suggestions,
        isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSuggestions: ({value}) => dispatch(loc_actions.loadSuggestions(value)),
        clearSuggestions: () => dispatch(loc_actions.clearSuggestions()),
        updateInputValue: (event, {newValue}) => dispatch(loc_actions.updateInputValue(newValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FormContainer)