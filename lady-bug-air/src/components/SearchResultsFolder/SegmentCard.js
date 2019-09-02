import React from 'react'

const SegmentCard = ({arrival, departure, operatingCarrier, flightDuration}) => {
  const RoundNumber = number => {
    return Number((number).toFixed(1))
  }
  return (
    <div>
      <div>
        Departure: {departure.airportName}
        Date: {departure.date}
        Time: {departure.time}
      </div>
      <div>
        Arrival: {arrival.airportName}
        Date: {arrival.date}
        Time: {arrival.time}
      </div>
      <div>
        Operating Carrier: {operatingCarrier.name}
      </div>
      <div>
        Flight Duration: {RoundNumber(flightDuration/60)} hours
      </div>
    </div>
  )
}

export default SegmentCard