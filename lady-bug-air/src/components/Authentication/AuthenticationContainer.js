import React from "react";
import { connect } from "react-redux";
import API from "../Api/Api";
import auth_actions from "../Redux/actions/auth_actions";

import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

const expireDate = milliseconds => {
  const expiryDate = new Date(
    new Date().getTime() + milliseconds
  ).toISOString();
  return expiryDate;
};

const logInFetch = (email, password) => {
  return fetch(API.logInApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
};

const AuthenticationContainer = props => {
  const {
    logoutHandler,
    loginEmailDetail,
    loginPasswordDetail,
    email,
    password,
    updateUserAuthenticated,
    signinForm,
    userLoggedIn,
    switchLoginSignupForm
  } = props;
  const setItemSetAutoLogout = data => {
    localStorage.setItem("token", data.token);
    const remainingMilliseconds = 60 * 60 * 1000;
    const userExpiryDate = expireDate(remainingMilliseconds);
    localStorage.setItem("expiryDate", userExpiryDate);
    setAutoLogout(remainingMilliseconds);
  };
  const setAutoLogout = milliseconds => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };
  const logInHandler = event => {
    event.preventDefault();
    logInFetch(email, password)
      .then(resp => {
        if (resp.status === 401) {
          throw new Error("Validation failed.");
        }
        if (resp.status !== 200 && resp.status !== 201) {
          throw new Error("Could not authenticate you.");
        }
        return resp.json();
      })
      .then(data => {
        setItemSetAutoLogout(data)
        return data
      })
      .then(updateUserAuthenticated)
      .catch(err => {
        console.log(err);
      });
  };
  const signUpHandler = event => {
    event.preventDefault();
    const userBody = {
      email: email,
      password: password,
      first_name: "",
      last_name: "",
      dob: "1800-01-01",
      title: ""
    };
    API.createUser(userBody)
      .then(resp => {
        if (resp.status === 500) {
          throw new Error("This email has been taken.");
        }
        if (resp.status !== 200 && resp.status !== 201) {
          throw new Error("Validation failed");
        }
        return resp.json();
      })
      .then(data => {
        setItemSetAutoLogout(data)
        return data
      })
      .then(data => {
        console.log(data)
        updateUserAuthenticated(data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  const loginSignupHandler = event => {
    event.preventDefault();
    switchLoginSignupForm()
  };

  const choicedRenderLoginSignupForm = () => {
    return (
      <div>
        {signinForm ? (
          <LoginCard
            loginSignupHandler={loginSignupHandler}
            logInHandler={logInHandler}
            loginEmailDetail={loginEmailDetail}
            email={email}
            loginPasswordDetail={loginPasswordDetail}
            password={password}
          />
        ) : (
          <SignupCard
            loginSignupHandler={loginSignupHandler}
            signUpHandler={signUpHandler}
            loginEmailDetail={loginEmailDetail}
            email={email}
            loginPasswordDetail={loginPasswordDetail}
            password={password}
          />
        )}
      </div>
    );
  };

  return <>{userLoggedIn ? null : choicedRenderLoginSignupForm()}</>;
};

const mapStateToProps = state => {
  const { email, password, signinForm, userLoggedIn } = state.authReducer;
  return {
    email,
    password,
    signinForm,
    userLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutHandler: () => dispatch(auth_actions.logoutHandler()),
    loginEmailDetail: email => dispatch(auth_actions.loginEmailDetail(email)),
    loginPasswordDetail: password =>
      dispatch(auth_actions.loginPasswordDetail(password)),
    updateUserAuthenticated: data =>
      dispatch(auth_actions.updateUserAuthenticated(data)),
    switchLoginSignupForm: () => dispatch(auth_actions.switchLoginSignupForm())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationContainer);
