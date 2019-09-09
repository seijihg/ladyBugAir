import React from "react";
import { connect } from "react-redux";
import offerCard_actions from "../Redux/actions/offerCard_actions";
import PassengerForm from "./PassengerForm";
import { NavLink } from 'react-router-dom'

const PassengersDetails = props => {
  const {
    details,
    passengers,
    addPassengerInputController,
    onChangeInputFields
  } = props;
  React.useEffect(() => {
    if (details === null) {
      return;
    }
    details.passengers.forEach((pass, idx) =>
      addPassengerInputController({
        idx: idx,
        title: "",
        first_name: "",
        last_name: "",
        phone: "",
        email: ""
      })
    );
  }, []);

  const passengerFormHandlerInput = (event, idx) => {
    const obj = {
      idx: idx,
      [event.target.name]: event.target.value
    };
    onChangeInputFields(obj);
  };
  const renderPassengersForm = () => {
    if (details === null) {
      return <p>Session expired</p>;
    }
    return (
      <div>
        {passengers.map(pass_input => (
          <PassengerForm
            key={pass_input.idx}
            pass_input={pass_input}
            passengerFormHandlerInput={passengerFormHandlerInput}
          />
        ))}
        <NavLink exact to="/search_results/view_deal/confirm_booking">
          Continue
        </NavLink>
      </div>
    )
  };
  return (
    <div>
        {renderPassengersForm()}
    </div>
  )
};
const mapStateToProps = state => {
  const { details, passengers } = state.offerCardReducer;
  return {
    details,
    passengers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    savePassengersToState: passengers =>
      dispatch(offerCard_actions.savePassengersToState(passengers)),
    addPassengerInputController: obj =>
      dispatch(offerCard_actions.addPassengerInputController(obj)),
    onChangeInputFields: obj =>
      dispatch(offerCard_actions.onChangeInputFields(obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassengersDetails);