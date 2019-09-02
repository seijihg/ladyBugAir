import React from "react";
import { withRouter } from 'react-router-dom'
import { connect} from 'react-redux'
import OfferJourneyCard from "./OfferJourneyCard";
import ViewDealButton from "./ViewDealButton";
import offerCard_actions from '../Redux/actions/offerCard_actions'

const OfferCard = ({ offer, flights, destinations, saveViewDealToState, history }) => {
  const { offerId, journeys, totalPrice, provider } = offer;

  const findJourney = () => {
    return journeys.map(journey => { 
      const getDestination = () => {
        return destinations.filter(dest => dest.code === journey.destination);
      };
      const getFlightSegments = () => {
        return flights.filter(
          flight =>
            flight.id ===
            journey.flightIds.find(flightId => flightId === flight.id)
        );
      };
      return (
        <OfferJourneyCard
          destination={getDestination()[0]}
          segments={getFlightSegments()}
          provider={provider}
        />
      );
    });
  };
  const viewDealHandler = () => {
    saveViewDealToState(offerId)
    history.push("/view_deal")
  }
  return (
    <div>
      {findJourney()}
      Price: {totalPrice.amount}
      <ViewDealButton viewDealHandler={viewDealHandler}/>
      <p>----</p>
    </div>
  );
};

const mapStateToProps = state => {
  const {isLoading, details} = state.offerCardReducer
  return {
    details,
    isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveViewDealToState: (offerId) => dispatch(offerCard_actions.saveViewDealToState(offerId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(OfferCard));