import React from 'react'

const SegmentCardBook = ({arrival, departure, operatingCarrier, flightDuration, totalDuration}) => {
  const RoundNumber = number => {
    const hours = (number / 60)
    const rhours = Math.floor(hours)
    const minutes = (hours - rhours) * 60
    const rminutes = Math.round(minutes)
    return rhours + " h(s) " + rminutes + " m(s)"
  }
  return (
    <div>
      <div className="segmentCardBook">
        <div className="operated">
          <p>Operated By: {operatingCarrier.name}</p>
        </div>
        <div className="time">
          <h2>{departure.date} {departure.time}</h2>
          <p>{departure.airportName} ({departure.airportCode})</p>
          <p>Terminal: {departure.terminal}</p>
        </div>
        <div>
          <p>Duration: {RoundNumber(flightDuration)}</p>
        </div>
        <div>
          <h2>{arrival.date} {arrival.time}</h2>
          <p>{arrival.airportName} ({arrival.airportCode})</p>
          <p>Terminal: {departure.terminal}</p>
        </div>
      </div>
      <div className="total_duration">
        <h2>Total Duration: {RoundNumber(totalDuration)}</h2>
      </div>
    </div>
  )
}

export default SegmentCardBook