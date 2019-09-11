import React from 'react'
import FormContainer from '../FormFolder/FormContainer';
import DestinationContainer from '../DestinationsFolder/DestinationContainer';

class BodyContainer extends React.Component {
    render() {
        return(
            <div className="index_container">
                <FormContainer />
                <DestinationContainer />
            </div>
        )
    }
}

export default BodyContainer