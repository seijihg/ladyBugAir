import React from 'react'

const PassengerCard = (props) => {
  return (
    <div className="passengers_container">
      <div>
        <p><i class="fas fa-user-astronaut"></i> 1 x Adult</p>
      </div>
      <div>
        <p>£{props.totalAmount}</p>
      </div>
    </div>
  )
}
export default PassengerCard