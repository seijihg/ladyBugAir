import React from 'react'

const SegmentCardBook = ({arrival, departure, operatingCarrier, flightDuration}) => {
  const RoundNumber = number => {
    return Number((number).toFixed(1))
  }
  return (
    <div className="segmentCard">
      <div className="time">
        <h2>{departure.time} — {arrival.time}</h2>
        <p>{operatingCarrier.name}</p>
      </div>
      <div>
        <h2>{RoundNumber(flightDuration/60)}h</h2>
      </div>
      <div>
        <p>{departure.airportCode} - {arrival.airportCode}</p>
      </div>
    </div>
  )
}

export default SegmentCardBook