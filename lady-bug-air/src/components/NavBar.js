import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

class NavBar extends React.Component {
  render() {
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
            <li>
              <NavLink exact to="/member">
                Member
              </NavLink>
            </li>
            <li>Sign in</li>
          </ul>
        </nav>
        <div className="login_form">
          <Login />
        </div>
      </>
    );
  }
}

export default NavBar;
