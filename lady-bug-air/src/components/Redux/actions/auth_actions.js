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

export default {
  logoutHandler,
  loginEmailDetail,
  loginPasswordDetail,
  updateUserAuthenticated
}