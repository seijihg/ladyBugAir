import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer';
import BodyContainer from './BodyContainer';
import { Route, Switch } from "react-router-dom";
import SearchResults from '../SearchResultsFolder/SearchResultsContainer';


const MainContainer = () => {
  return (
    <div>
      <NavBar />
      <Route exact path="/" render={() => <BodyContainer />} />
      <Route exact path="/search_results" render={() => <SearchResults/>} />
      <Footer />
    </div>
  )
}

export default MainContainer

{/* <Switch>
        
        <Route
          exact
          path="/profile/dashboard"
          render={() => <DashboardContainer />}
        />
</Switch> */}