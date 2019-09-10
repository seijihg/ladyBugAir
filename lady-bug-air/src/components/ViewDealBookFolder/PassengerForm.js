import React from "react";
const PassengerForm = ({
  pass_input,
  passengerFormHandlerInput
}) => {
  return (
    <div className="passengerForm_container">
      <div>
          <label for="title">Title: </label>
          <br></br>
          <select
            id="title"
            value={pass_input.title}
            onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
            name="title"
            required
          >
            <option value="">Select</option>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="miss">Miss</option>
            <option value="ms">Ms</option>
          </select>
      </div>
      <div>
          <label for="name">First Name: </label>
          <br></br>
          <input
            id="name"
            name="first_name"
            value={pass_input.first_name}
            onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
          ></input>
      </div>
      <div>
          <label for="last_name" >
            Last Name:
          </label>
          <br></br>
          <input
            value={pass_input.last_name}
            id="last_name"
            name="last_name"
            onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
          ></input>
      </div>
      <div>
        <label for="phone">Phone: </label>
        <br></br>
        <input
          id="phone"
          name="phone"
          type="number"
          value={pass_input.phone}
          onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
        ></input>
      </div>
      <div>
        <label for="email">Email: </label>
        <br></br>
        <input
          id="email"
          type="email"
          name="email"
          value={pass_input.email}
          onChange={event => passengerFormHandlerInput(event, pass_input.idx)}
        ></input>
      </div>
    </div>
  );
};

export default PassengerForm;
