const defaultState = {
  userLoggedIn: false,
  email: "",
  password:"",
  signinForm: true,
  userInfomation: null
}

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      localStorage.removeItem("token")
      localStorage.removeItem("expiryDate")
      return {
        ...state,
        userInfomation: null,
        userLoggedIn: false
      }
    case "ADD_LOGIN_EMAIL":
      return {
        ...state,
        email: action.email
      }
    case "ADD_LOGIN_PASSWORD":
      return {
        ...state,
        password: action.password
      }
    case "USER_GET_AUTHENTICATED":
      console.log("USER_GET_AUTHENTICATED")
      return {
        ...state,
        userLoggedIn: true,
        userInfomation: action.data.data,
        email: "",
        password:""
      }
    case  "SWITCH_FORM":
      return {
        ...state,
        signinForm: !state.signinForm
      }
    case "UPDATE_USER_INFO_WITH_BOOKING":
      console.log(action.booking)
      return {
        ...state,
        userInfomation: {
          ...state.userInfomation,
          bookings: [...state.userInfomation.bookings, action.booking]
        }
      }
    default:
      return state
  }
}

export default authReducer