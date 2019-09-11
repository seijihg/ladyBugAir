import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import BodyContainer from "./components/Containers/BodyContainer";
import SearchResultsContainer from "./components/SearchResultsFolder/SearchResultsContainer";
import ViewDealContainer from "./components/ViewDealBookFolder/ViewDealContainer";
import API from "./components/Api/Api";
import { connect } from "react-redux";
import auth_actions from "./components/Redux/actions/auth_actions";
import PassengersDetails from "./components/ViewDealBookFolder/PassengersDetails";
import ConfirmBooking from "./components/ViewDealBookFolder/ConfirmBooking";
import DashboardCard from "./components/UserDashboard/DashboardCard";
import FooterContainer from "./components/FooterFolder/FooterContainer";

function App(props) {
  React.useEffect(() => {
    if (localStorage.token) {
      API.authenticateUser(localStorage.token).then(
        props.updateUserAuthenticated
      );
    }
  }, [props.updateUserAuthenticated]);
  const navBarLogoutHandler = event => {
    event.preventDefault();
    props.logoutHandler();
    props.history.push("/")
  };
  const profilePageRouteDirectDependsOnAuth = () => {
    if (props.userLoggedIn === true) {
      return (
        <>
          <Route
            path="/profile/"
            render={() => <Redirect to="/profile/dashboard" />}
          />
          <Route
            exact
            path="/profile/dashboard"
            render={props => <DashboardCard {...props} />}
          />
        </>
      );
    }
  };
  return (
    <>
    <div className="main_container_up">
      <div className="navbar_container">
        <NavBar
          userLoggedIn={props.userLoggedIn}
          userInfomation={props.userInfomation}
          logoutHandler={navBarLogoutHandler}
        />
      </div>
      <div className="container">
        <Route exact path="/" render={props => <BodyContainer {...props} />} />
        <div className="search_book_main_container_top">
        <div className="search_book_main_container">
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
          
        </div>
        </div>
        {profilePageRouteDirectDependsOnAuth()}
      </div>
    </div>
    <div className="footer_container">
      <FooterContainer />
    </div>
    </>
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
