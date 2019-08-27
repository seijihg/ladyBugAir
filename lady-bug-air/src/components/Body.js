import React from 'react'
import '../css/Body.css';
import FormContainer from './FormFolder/FormContainer';
import DestinationContainer from './DestinationsFolder/DestinationContainer';
import AdsLinksContainer from './AdsLinksFolder/AdsLinksContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from './Login';

class Body extends React.Component {
    render() {
        return(
            <div className="body">
                <Login />
                <FormContainer />
                <DestinationContainer />
                <AdsLinksContainer />
            </div>
        )
    }
}

export default Body