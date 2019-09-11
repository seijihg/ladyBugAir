
const logoutHandler = () => {
  return dispatch => {
    dispatch({type: "REMOVE_USER"})
  }
}
const loginEmailDetail = (email) => {
  return dispatch => {
    dispatch({type: "ADD_LOGIN_EMAIL", email})
  }
}
const loginPasswordDetail = (password) => {
  return dispatch => {
    dispatch({type: "ADD_LOGIN_PASSWORD", password})
  }
}

const updateUserAuthenticated = data => {
  return dispatch => {
    dispatch({type: "USER_GET_AUTHENTICATED", data})
  }
}
const switchLoginSignupForm = () => {
  return dispatch =>{
    dispatch({type: "SWITCH_FORM"})
  }
}
const updateUserInformationAfterBooking = booking => {
  return dispatch => {
    dispatch({type: "UPDATE_USER_INFO_WITH_BOOKING", booking})
  }
}

export default {
  logoutHandler,
  loginEmailDetail,
  loginPasswordDetail,
  updateUserAuthenticated,
  switchLoginSignupForm,
  updateUserInformationAfterBooking
}