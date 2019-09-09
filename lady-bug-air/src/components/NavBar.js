import React from "react";
import { NavLink } from "react-router-dom";
import AuthenticationContainer from "./Authentication/AuthenticationContainer";
import MenuDashboardContainer from "./UserDashboard/MenuDashboardContainer";

class NavBar extends React.Component {
  state = {
    signForm: false
  }
  signFormHandler = () => {
    this.setState({
      signForm: !this.state.signForm
    })
  }
  render() {
    const { userLoggedIn, userInfomation, logoutHandler } = this.props;
    return (
      <>
        <nav id="navbar">
          <div className="div_logo">
            <img 
              className="logo"
              src="https://res.cloudinary.com/seijihg/image/upload/v1567870289/lady_bug_air/skysearch_orange_eehygy.png"
              alt="Bear Bug sky search logo"
            ></img>
            <ul>
              <li>
                <NavLink exact to="/">
                  Flights
                </NavLink>
              </li>
            </ul>
          </div>
          <ul>
            {userLoggedIn ? (
              <li>
                <MenuDashboardContainer
                  logoutHandler={logoutHandler}
                  userInfomation={userInfomation}
                />
              </li>
              ) : (
              <li className="signin" onClick={this.signFormHandler}>Sign in</li>
            )}
          </ul>
        </nav>
        {this.state.signForm ? 
        <div className="form_authentication_container">
          <AuthenticationContainer />
        </div> : null}
      </>
    );
  }
}

export default NavBar;
