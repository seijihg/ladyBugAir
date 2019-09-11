import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import SegmentCardBook from "./SegmetCardBook";
import TripSummaryCard from "./TripSummaryCard";
import MainLoadingPage from "../MainLoadingPage";

const ViewDealContainer = ({ isLoading, details, userLoggedIn }) => {
  const status = isLoading ? <MainLoadingPage /> : null;

  const getJourneys = () => {
    return details.journeys.map(journey =>
      journey.flightSegments.map(seg => <SegmentCardBook key={seg.id} {...seg} totalDuration={journey.totalDuration} />)
    );
  };
  const renderAfterStatusConfirmed = () => {
    if (details === null) {
      return status;
    }
    return (
      <>
        <div className="summarize_container">
          <div>
            <h1><i class="fas fa-plane"></i> Your Selected Flight</h1>
          </div>
          <div>
            {getJourneys()}
          </div>
        </div>
        <div className="trip_container_top">
          <TripSummaryCard details={details}/>
          {userLoggedIn ? (
            <NavLink exact to="/search_results/view_deal/passengers" > 
              <div className="btn deal_continue"><h2>Continue</h2></div>
            </NavLink>
          ) : (
            <div className="btn deal_continue">
              <h2>Please sign in or register to continue.</h2>
            </div>
          )}
        </div>
      </>
    );
  };
  return (
    <div className="viewDeal_container">
      {renderAfterStatusConfirmed()}
    </div>
  )
};

const mapStateToProps = state => {
  const { details, isLoading } = state.offerCardReducer;
  const { userLoggedIn } = state.authReducer
  return {
    details,
    isLoading,
    userLoggedIn
  };
};

export default connect(mapStateToProps)(ViewDealContainer);

// Comment