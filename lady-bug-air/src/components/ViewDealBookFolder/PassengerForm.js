import React from 'react'
const PassengerForm = ({savePassengersHandler, pass_input, passengerFormHandlerInput}) => {
  return (
    <div>
      <form onSubmit={savePassengersHandler}>
        <select id="title" value={pass_input.title} onChange={(event) => passengerFormHandlerInput(event, pass_input.idx)}>
          <option value="">Please Select</option>
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="miss">Miss</option>
          <option value="ms">Ms</option>
        </select>
        <label for="name">Enter your first name: </label>
        <input id="name" value={pass_input.first_name}></input>
        <br></br>
        <label for="lastname" value={pass_input.lastname}>Enter your last name: </label>
        <input id="lastname"></input>
        <br></br>
        <label for="phone">Enter your phone: </label>
        <input id="phone" type="number" value={pass_input.phone}></input>
        <br></br>
        <label for="email">Enter your email: </label>
        <input id="email" type="email" value={pass_input.email}></input>
        <br></br>
        <button type="submit">
          Accept
        </button>
      </form>
    </div>
  )
}

export default PassengerForm