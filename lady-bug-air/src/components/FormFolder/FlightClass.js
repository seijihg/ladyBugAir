import React from 'react'

const FlightClass = ({flightClassHandler, classType}) => {
  return (
    <>
    <select onChange={flightClassHandler} value={classType}>
        <option value="economy">Economy</option>
        <option value="premium">Premium</option>
        <option value="business">Business</option>
        <option value="first">First</option>
    </select>
    </>
  )
}

export default FlightClass