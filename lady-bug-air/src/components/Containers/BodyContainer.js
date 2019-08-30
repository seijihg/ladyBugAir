import React from 'react'
import '../../css/Body.css';
import FormContainer from '../FormFolder/FormContainer';
import DestinationContainer from '../DestinationsFolder/DestinationContainer';
import AdsLinksContainer from '../AdsLinksFolder/AdsLinksContainer'

class BodyContainer extends React.Component {
    render() {
        return(
            <div className="body">
                <FormContainer />
                <DestinationContainer />
                <AdsLinksContainer />
            </div>
        )
    }
}

export default BodyContainer