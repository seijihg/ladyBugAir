import React from 'react'
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

const LoginCard = ({logInHandler, loginEmailDetail, email, loginPasswordDetail, password, loginSignupHandler}) => {
  return (
    <div>
      <div className="top-header">
        <div>
          <img 
            className="auth_logo"
            src="https://res.cloudinary.com/seijihg/image/upload/v1567870289/lady_bug_air/bear_orange_m7uvzb.png"
            alt="small_bc_logo"
          ></img>
        </div>
        <div>
          <b>Good to see you again</b>
          <p>Sign in for member-only deals and access to your trip details.</p>
        </div>
      </div>
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
        <input type="submit" value="Login!" className="btn btn-auth"/>
      </div>
    </form>
    <p>Don't have an account? <span className="sign_log" onClick={loginSignupHandler}> Register</span></p>
    </div>
  )
}

export default LoginCard