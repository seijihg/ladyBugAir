import React from 'react'
import { connect } from 'react-redux'
import API from '../Api/Api'
import SegmentCardBook from "./SegmetCardBook";
import PassengerConfirmCard from './PassengerConfirmCard';
import auth_actions from '../Redux/actions/auth_actions'

const ConfirmBooking = ({details, isLoading, updateUserInformationAfterBooking, passengers, userInfomation, history}) => {
  const getJourneys = () => {
    if (details === null) {
      return <p>Session expired</p>;
    }
    return details.journeys.map(journey =>
      journey.flightSegments.map(seg => <SegmentCardBook key={seg.id} {...seg} totalDuration={journey.totalDuration} />)
    );
  };
  const listOutPassengers = () => {
    return passengers.map(pass => {
      return (
        <PassengerConfirmCard {...pass}/>
      )
    })
  }
  const confirmBookingHandler = () => {
    const body = {
      details: details,
      passengers: passengers
    }
    API.bookFlight(body, localStorage.token)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp.message)
      updateUserInformationAfterBooking(body)
      history.push("/")
    })
  }
  return (
    <div className="confirmBooking_container">
      <div className="summarize_container">
          <div>
            <h1><i class="fas fa-plane"></i> Your Selected Flight</h1>
          </div>
          <div>
            {getJourneys()}
          </div>
      </div>
      <div className="passenger_container">
        <div>
          {listOutPassengers()}
        </div>
        <div onClick={confirmBookingHandler} className="btn btn-confirm">Confirm Booking</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { details, isLoading, passengers } = state.offerCardReducer;
  const { userInfomation } = state.authReducer;
  return {
    details,
    isLoading,
    passengers,
    userInfomation
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateUserInformationAfterBooking: (booking) => dispatch(auth_actions.updateUserInformationAfterBooking(booking))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmBooking)