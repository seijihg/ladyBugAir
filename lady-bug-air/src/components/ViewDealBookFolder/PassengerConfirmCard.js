import React from 'react'

const PassengerConfirmCard = (props) => {
  return (
    <div>
      <div>
        <h1> <i class="fas fa-users"></i> Passenger's List</h1>
      </div>
      <div className="passenger_listout">
        <p className="p_item"><i class="fas fa-user-astronaut"></i> {props.title}. {props.first_name} {props.last_name}</p>
        <p className="p_item">{props.email}</p>
        <p className="p_item">{props.phone}</p>
      </div>
    </div>
  )
}
export default PassengerConfirmCard