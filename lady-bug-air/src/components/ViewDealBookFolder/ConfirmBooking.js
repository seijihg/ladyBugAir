import React from 'react'
import { connect } from 'react-redux'
import API from '../Api/Api'
import SegmentCard from "../SearchResultsFolder/SegmentCard";

const ConfirmBooking = ({details, isLoading, passengers, userInfomation, history}) => {
  const getJourneys = () => {
    if (details === null) {
      return <p>Session expired</p>;
    }
    return details.journeys.map(journey =>
      journey.flightSegments.map(seg => <SegmentCard key={seg.id} {...seg} />)
    );
  };
  const listOutPassengers = () => {
    return passengers.map(pass => {
      return (
        <div>
          {`${pass.first_name} ${pass.last_name}`}
        </div>
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
      history.push("/")
    })
  }
  return (
    <div>
      {getJourneys()}
      {listOutPassengers()}
      <div onClick={confirmBookingHandler}>Confirm Booking</div>
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

export default connect(mapStateToProps)(ConfirmBooking)