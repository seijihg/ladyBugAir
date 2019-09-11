import React from 'react'

const SegmentCard = ({arrival, departure, operatingCarrier, flightDuration, stops}) => {
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
        <h2>{stops === 1 ? <p>direct</p> : <p>{stops - 1} stop</p>}</h2>
      </div>
      <div>
      <h2>{RoundNumber(flightDuration/60)}h</h2>
        <p>{departure.airportCode} - {arrival.airportCode}</p>
      </div>
    </div>
  )
}

export default SegmentCard