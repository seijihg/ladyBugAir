import React from 'react'

const MenuDashboardContainer = ({userInfomation, logoutHandler}) => {
  return (
    <div>
      <p>{userInfomation.email}</p>
      Dashboard
      <div onClick={logoutHandler}>
        Sign out
      </div>
    </div>
  )
}

export default MenuDashboardContainer