import React from "react";
import { connect } from "react-redux";
import BagDetails from "./BagDetails";
import { NavLink } from 'react-router-dom'
import SegmentCardBook from "./SegmetCardBook";

const ViewDealContainer = ({ isLoading, details, userLoggedIn }) => {
  const status = isLoading ? "Loading..." : "View Deal";

  const getJourneys = () => {
    return details.journeys.map(journey =>
      journey.flightSegments.map(seg => <SegmentCardBook key={seg.id} {...seg} />)
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
        <div>
          <h1>Your Selected Flight.</h1>
        </div>
        <div>{getJourneys()}</div>
        <div>
          Total: {details.totalPrice.amount} / {details.totalPrice.currencyCode}
        </div>
        {userLoggedIn ? (
          <NavLink exact to="/search_results/view_deal/passengers" activeClassName="deal_continue"> 
            Continue
          </NavLink>
        ) : (
          <div className="please_sign">
            <h2>Please sign in or register to continue.</h2>
          </div>
        )}
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
