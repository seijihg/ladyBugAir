import React from "react";
import { NavLink } from "react-router-dom";
import AuthenticationContainer from "./Authentication/AuthenticationContainer";
import MenuDashboardContainer from "./UserDashboard/MenuDashboardContainer";

class NavBar extends React.Component {
  render() {
    const { userLoggedIn, userInfomation, logoutHandler } = this.props;
    return (
      <>
        <nav id="navbar">
          <h1 className="logo">
            <i class="fas fa-bug"> | Lady Bug Air</i>
          </h1>
          <ul>
            <li>
              <NavLink exact to="/">
                Flights
              </NavLink>
            </li>
            {userLoggedIn ? (
              <li>
                  <MenuDashboardContainer userInfomation={userInfomation} logoutHandler={logoutHandler}/>
              </li>
            ) : (
              <li>Sign in</li>
            )}
          </ul>
        </nav>
        <div className="login_form">
          <AuthenticationContainer />
        </div>
      </>
    );
  }
}

export default NavBar;
