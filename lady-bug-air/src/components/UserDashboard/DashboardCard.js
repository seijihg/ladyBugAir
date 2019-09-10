import React from 'react'
import {connect} from 'react-redux'
import BookingCard from './BookingCard'

const DashboardCard = ({userInfomation}) => {
  const fullName = (data) => {
    return `${data.first_name} ${data.last_name}`
  }
  const getBookingOut = () => {
    return userInfomation.bookings.map((booking, idx) => {
      return (
        <BookingCard key={idx} {...booking} fullName={fullName}/>
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
    <div className="main_dashboard_container">
      <div className="dashboard_container">
        {renderCard()}
        <h2>Your booked flights</h2>
        {getBookingOut()}
      </div>
      
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