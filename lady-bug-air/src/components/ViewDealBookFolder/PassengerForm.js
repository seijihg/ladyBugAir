import React from "react";
const PassengerForm = ({
  pass_input,
  passengerFormHandlerInput
}) => {
  return (
    <div>
        <select
          id="title"
          value={pass_input.title}
          onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
          name="title"
        >
          <option value="">Please Select</option>
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="miss">Miss</option>
          <option value="ms">Ms</option>
        </select>
        <label for="name">Enter your first name: </label>
        <input
          id="name"
          name="first_name"
          value={pass_input.first_name}
          onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
        ></input>
        <br></br>
        <label for="last_name" >
          Enter your last name:
        </label>
        <input
          value={pass_input.last_name}
          id="last_name"
          name="last_name"
          onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
        ></input>
        <br></br>
        <label for="phone">Enter your phone: </label>
        <input
          id="phone"
          name="phone"
          type="number"
          value={pass_input.phone}
          onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
        ></input>
        <br></br>
        <label for="email">Enter your email: </label>
        <input
          id="email"
          type="email"
          name="email"
          value={pass_input.email}
          onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
        ></input>
    </div>
  );
};

export default PassengerForm;
