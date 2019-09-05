import React from 'react'
import MenuCard from './MenuCard'

const MenuDashboardContainer = ({userInfomation, userLoggedIn, logoutHandler}) => {
  return (
    <div>
      {userInfomation ? <p>{userInfomation.email}</p> : <p>blank</p>}
      <MenuCard logoutHandler={logoutHandler}/>
    </div>
  )
}


export default MenuDashboardContainer