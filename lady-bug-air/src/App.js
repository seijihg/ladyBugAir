import React from 'react';
import './css/App.css';
import MainContainer from './components/Containers/MainContainer';
import { BrowserRouter as Router, Route } from "react-router-dom"
import DashboardContainer from './components/Containers/DashboardContainer';

function App() {
  return (
    <Router>
        <Route exact path='/' render={() => <MainContainer />}/>
        <Route exact path='/profile/dashboard' render={() => <DashboardContainer />}/>
    </Router>
  );
}

export default App;
