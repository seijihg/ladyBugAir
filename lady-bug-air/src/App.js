import React from "react";
import "./css/App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BodyContainer from "./components/Containers/BodyContainer";
import SearchResultsContainer from "./components/SearchResultsFolder/SearchResultsContainer";
import ViewDealContainer from "./components/ViewDealBookFolder/ViewDealContainer";
import API from "./components/Api/Api";
import { connect } from "react-redux";
import auth_actions from "./components/Redux/actions/auth_actions";
import PassengersDetails from "./components/ViewDealBookFolder/PassengersDetails";
import ConfirmBooking from "./components/ViewDealBookFolder/ConfirmBooking";

function App(props) {
  React.useEffect(() => {
    if (localStorage.token) {
      API.authenticateUser(localStorage.token).then(
        props.updateUserAuthenticated
      );
    }
  }, []);
  const navBarLogoutHandler = event => {
    event.preventDefault()
    props.logoutHandler()
  }
  return (
    <div>
      <NavBar
        userLoggedIn={props.userLoggedIn}
        userInfomation={props.userInfomation}
        logoutHandler={navBarLogoutHandler}
      />
      <Route exact path="/" render={props => <BodyContainer {...props} />} />
      <Route
        exact
        path="/search_results"
        render={props => <SearchResultsContainer {...props} />}
      />
      <Route
        exact
        path="/search_results/view_deal"
        render={props => <ViewDealContainer {...props} />}
      />
      <Route
        exact
        path="/search_results/view_deal/passengers"
        render={props => <PassengersDetails {...props} />}
      />
      <Route
        exact
        path="/search_results/view_deal/confirm_booking"
        render={props => <ConfirmBooking {...props} />}
      />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  const { userInfomation, userLoggedIn } = state.authReducer;
  return {
    userInfomation,
    userLoggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateUserAuthenticated: data =>
      dispatch(auth_actions.updateUserAuthenticated(data)),
    logoutHandler: () => dispatch(auth_actions.logoutHandler())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
