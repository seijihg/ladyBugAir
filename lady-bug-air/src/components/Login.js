import React from "react";
import logInApi from "./Api/Api";

const expireDate = milliseconds => {
  const expiryDate = new Date(
    new Date().getTime() + milliseconds
  ).toISOString();
  return expiryDate;
};

const setAutoLogout = milliseconds => {
  // setTimeout(() => {
  //     logoutHandler();
  // }, milliseconds);
};

const logInFetch = (email, password) => {
  return fetch(logInApi, {
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

const Login = () => {
  const logInHandler = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
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
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const userExpiryDate = expireDate(remainingMilliseconds);
        localStorage.setItem("expiryDate", userExpiryDate);
        setAutoLogout(remainingMilliseconds);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={logInHandler}>
        <div>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className="login_email"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="login_password"
            required
            autoComplete="current-password"
          />
        </div>
        <div>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Remember me</label>
        </div>
        <div>
          <a href="javascript:void(0)">Forgot password?</a>
        </div>
        <div>
          <input type="submit" value="Login!" />
        </div>
      </form>
    </>
  );
};

export default Login;
