import React from 'react'
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

const SignupCard = ({signUpHandler, loginEmailDetail, email, loginPasswordDetail, password, loginSignupHandler}) => {
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
            <b>Sign up and save</b>
            <p>Create an account now for access to member-only deals.</p>
          </div>
      </div>
    <form onSubmit={signUpHandler}>
      <InputEmail 
        loginEmailDetail={loginEmailDetail}
        email={email}
      />
      <InputPassword 
        loginPasswordDetail={loginPasswordDetail}
        password={password}
      />
      <div>
        <input type="submit" value="Signup!" className="btn btn-auth"/>
      </div>
    </form>
    <p>Already have an account? <span className="sign_log" onClick={loginSignupHandler}> Sign in</span></p>
    <div className="signup-term">By signing up you accept our terms of use and privacy policy.</div>
    </div>
  )
}

export default SignupCard