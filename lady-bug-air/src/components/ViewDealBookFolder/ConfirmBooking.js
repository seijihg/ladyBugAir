import React from 'react'
import { connect } from 'react-redux'
import API from '../Api/Api'

const ConfirmBooking = ({details, isLoading}) => {
  debugger
  return (
    <div>

    </div>
  )
}
const mapStateToProps = state => {
  const { details, isLoading } = state.offerCardReducer;
  return {
    details,
    isLoading
  };
};

export default connect(mapStateToProps)(ConfirmBooking)