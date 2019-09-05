import React from 'react'
import MenuCard from './MenuCard'
import {connect} from 'react-redux'

const MenuDashboardContainer = ({userInfomation, userLoggedIn, logoutHandler}) => {
  return (
    <div>
      {userInfomation ? <p>{userInfomation.email}</p> : <p>blank</p>}
      <MenuCard logoutHandler={logoutHandler}/>
    </div>
  )
}
const mapStateToProps = state => {
  const { userInfomation, userLoggedIn } = state.authReducer;
  return {
    userInfomation,
    userLoggedIn
  };
};

export default connect(mapStateToProps) (MenuDashboardContainer)