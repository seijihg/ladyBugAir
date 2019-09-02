import React from "react";
import { connect } from "react-redux";
import SegmentCard from "../SearchResultsFolder/SegmentCard";
import BagDetails from "./BagDetails";

const ViewDealContainer = ({ isLoading, details }) => {
  const status = isLoading ? "Loading..." : "View Deal";

  const getJourneys = () => {
    return details.journeys.map(journey =>
      journey.flightSegments.map(seg => <SegmentCard key={seg.id} {...seg} />)
    );
  };
  const bagDisclosures = () => {
    return details.bagDisclosures.map(bag => <BagDetails key={bag.bagRefId} {...bag}/>)
  }
  const renderAfterStatusConfirmed = () => {
    if (details === null) {
      return status;
    }
    return (
      <>
        <div>
          {getJourneys()}
        </div>
        <div>
          {bagDisclosures()}
        </div>
        <div>
          Total: {details.totalPrice.amount} / {details.totalPrice.currencyCode}
        </div>
      </>
    )
  };
  return <div>{renderAfterStatusConfirmed()}</div>;
};

const mapStateToProps = state => {
  const { details, isLoading } = state.offerCardReducer;
  return {
    details,
    isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewDealContainer);
