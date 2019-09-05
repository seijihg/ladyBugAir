import React from 'react'
import {connect} from 'react-redux'

const DashboardCard = ({userInfomation}) => {
  const fullName = (data) => {
    console.log(data)
    return `${data.first_name} ${data.last_name}`
  }
  const getBookingOut = () => {
    return userInfomation.bookings.map(booking => {
      return (
        <div>
          <p>{booking.id}</p>
          {booking.passengers.map(pass => <p>{fullName(pass)}</p>)}
        </div>
      )
    })
  }
  const renderCard = () => {
    if (userInfomation === null) {return <p>Loading</p>}
    return (
      <div>
        <h1>Welcome back,{fullName(userInfomation)}</h1>
      </div>
    )
  }
  return (
    <div>
      {renderCard()}
      {getBookingOut()}
    </div>
  )
}
const mapStateToProps = state => {
  const { userInfomation } = state.authReducer;
  return {
    userInfomation
  };
};
export default connect(mapStateToProps) (DashboardCard)