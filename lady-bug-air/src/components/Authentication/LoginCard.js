import React from 'react'
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

const LoginCard = ({logInHandler, loginEmailDetail, email, loginPasswordDetail, password}) => {
  return (
    <div>
    <h1>Good to see you again</h1>
    <p>Sign in for member-only deals and access to your trip details.</p>
    <form onSubmit={logInHandler}>
      <InputEmail 
        loginEmailDetail={loginEmailDetail}
        email={email}
      />
      <InputPassword 
        loginPasswordDetail={loginPasswordDetail}
        password={password}
      />
      <div>
        <input type="checkbox" id="scales" name="scales" defaultChecked/>
        <label for="scales">Remember me</label>
      </div>
      <div>
        <input type="submit" value="Login!" />
      </div>
    </form>
    <p>Don't have an account?</p>
    <button>Register</button>
    </div>
  )
}

export default LoginCard