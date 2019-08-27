import React from 'react'
import SearchFlightsForm from './SearchFlightsForm';
import API from '../Api/Api'

class FormContainer extends React.Component {
    
    componentDidMount
    render() {
        return(
            <div>
                <h1>Search Flights and Book!</h1>
                <SearchFlightsForm />
            </div>
        )
    }
}

export default FormContainer