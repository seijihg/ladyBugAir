import React from "react";
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
const BookingCard = ({details, passengers, fullName}) => {
  const checkedDetails = Array.isArray(details) ? details : [details]

  const departurePlace = checkedDetails[0].journeys[0].flightSegments[0].departure.airportName
  const dateDeparture = checkedDetails[0].journeys[0].flightSegments[0].departure.date
  const lenghtJourney = checkedDetails[0].journeys.length - 1
  const lengthSegment = checkedDetails[0].journeys[lenghtJourney].flightSegments.length - 1
  const arrivalPlace = checkedDetails[0].journeys[lenghtJourney].flightSegments[lengthSegment].departure.airportName

  const passengerNames = () => {
    return passengers.map(pass => <p>{capitalize(pass.title)} {pass.first_name} {pass.last_name}</p>)
  }
  return (
    <div className="bookingCard_showcase">
      <div className="bookingCard">
      <div className="content">
        <p>From: {departurePlace}</p>
        <p>Depart Date: {dateDeparture}</p>
      </div>
      <div className="content">
        Passengers: {passengerNames()}
      </div>
      <div className="content">
        To: {arrivalPlace}
      </div>
      </div>
    </div>
  );
};
export default BookingCard