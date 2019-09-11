import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuCard = ({logoutHandler, userInfomation}) => {
  return (
    <div className="menuCard">
      <li>
        {userInfomation.email}
      </li>
      <li>
        <NavLink exact to="/profile/dashboard" >
          Dashboard
        </NavLink>
      </li>
      <li onClick={logoutHandler} className="signin">
        Sign out
      </li>
    </div>
  )
}

export default MenuCard