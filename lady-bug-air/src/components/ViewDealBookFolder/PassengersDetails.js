import React from 'react'
import { connect } from 'react-redux'
import offerCard_actions from '../Redux/actions/offerCard_actions'
import PassengerForm from './PassengerForm';

const PassengersDetails = (props) => {
  const { details, passengers, addPassengerInputController, onChangeTitle } = props
  React.useEffect(() => {
    if (details === null) {return}
    details.passengers.forEach((pass, idx) => addPassengerInputController({
      idx: idx,
      title: "",
      first_name: "",
      last_name: "",
      phone: "",
      email: ""
    }));
  }, [])
  
  const savePassengersHandler = (event) => {
    event.preventDefault()
    console.log("clicked")
  }

  const passengerFormHandlerInput = (event, idx) => {
    console.log(event.target.value)
    const obj = {
      idx: idx,
      title: event.target.value
    }
    onChangeTitle(obj)
  }
  const renderPassengersForm = () => {
    if (details === null) {return <p>Session expired</p>}
    return passengers.map(pass_input => <PassengerForm savePassengersHandler={savePassengersHandler} pass_input={pass_input} passengerFormHandlerInput={passengerFormHandlerInput}/>)
  }
  return (
    <div>
      {renderPassengersForm()}
    </div>
  )
}
const mapStateToProps = state => {
  const { details, passengers } = state.offerCardReducer;
  return {
    details,
    passengers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    savePassengersToState: (passengers) => dispatch(offerCard_actions.savePassengersToState(passengers)),
    addPassengerInputController: (obj) => dispatch(offerCard_actions.addPassengerInputController(obj)),
    onChangeTitle: (obj) => dispatch(offerCard_actions.onChangeTitle(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengersDetails)