import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuCard = ({logoutHandler}) => {
  return (
    <div>
      <NavLink exact to="/profile/dashboard" activeClassName="selected">
        Dashboard
      </NavLink>
      <br></br>
      <NavLink exact to="/profile/dashboard" activeClassName="selected">
        Account
      </NavLink>
      <div onClick={logoutHandler}>
        Sign out
      </div>
    </div>
  )
}

export default MenuCard