import React from "react";
import { connect } from "react-redux";
import SegmentCard from "../SearchResultsFolder/SegmentCard";
import BagDetails from "./BagDetails";
import AuthenticationContainer from "../Authentication/AuthenticationContainer";
import { NavLink } from 'react-router-dom'

const ViewDealContainer = ({ isLoading, details, userLoggedIn }) => {
  const status = isLoading ? "Loading..." : "View Deal";

  const getJourneys = () => {
    return details.journeys.map(journey =>
      journey.flightSegments.map(seg => <SegmentCard key={seg.id} {...seg} />)
    );
  };
  const bagDisclosures = () => {
    return details.bagDisclosures.map(bag => (
      <BagDetails key={bag.bagRefId} {...bag} />
    ));
  };
  const renderAfterStatusConfirmed = () => {
    if (details === null) {
      return status;
    }
    return (
      <>
        <div>{getJourneys()}</div>
        <div>{bagDisclosures()}</div>
        <div>
          Total: {details.totalPrice.amount} / {details.totalPrice.currencyCode}
        </div>
        {userLoggedIn ? (
          <NavLink exact to="/search_results/view_deal/passengers">
            Passengers
          </NavLink>
        ) : (
          <AuthenticationContainer />
        )}
      </>
    );
  };
  return <div>{renderAfterStatusConfirmed()}</div>;
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
