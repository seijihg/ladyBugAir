import React from 'react'

const Airport = ({airports}) => {
  const airs = () => {
    if (airports !== undefined) {return airports.map(airport => {
      return <option value={airport.airport_name} iata={airport.iata} key={airport.icao}></option>
    })}
  }
  return  (
    <>
      {airs()}
    </>
  )
}

export default Airport