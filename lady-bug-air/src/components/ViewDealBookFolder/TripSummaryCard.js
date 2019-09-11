import React from 'react'
import PassengerCard from './PassengerCard'

const TripSummaryCard = ({details}) => {
  const renderPassengers = () => {
    return details.passengers.map((pass, idx) => {
      return (
        <PassengerCard key={idx} {...pass}/>
      )
    })
  }
  return (
    <div className="trip_container">
        <h1>Trip Summary</h1>
        {renderPassengers()}
        <div className="total_container">
          <div>
            <h2>Total:</h2>  
          </div>
          <div>
            <h2>£{details.totalPrice.amount}</h2>
          </div>
        </div>
    </div>
  )
}

export default TripSummaryCard