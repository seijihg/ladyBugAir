import React from "react";
import "./css/App.css";
import { Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import BodyContainer from './components/Containers/BodyContainer';
import SearchResultsContainer from './components/SearchResultsFolder/SearchResultsContainer';
import ViewDealContainer from './components/ViewDealBookFolder/VIewDealContainer'

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" render={(props) => <BodyContainer {...props}/>} />
      <Route exact path="/search_results" render={(props) => <SearchResultsContainer {...props}/>} />
      <Route exact path="/view_deal" render={(props) => <ViewDealContainer {...props}/>} />
      <Footer />
    </div>
  );
}

export default App;
