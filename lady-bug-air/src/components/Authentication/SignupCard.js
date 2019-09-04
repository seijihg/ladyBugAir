import React from 'react'
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

const SignupCard = ({signUpHandler, loginEmailDetail, email, loginPasswordDetail, password}) => {
  return (
    <div>
    <h1>Sign up and save</h1>
    <p>Create an account now for access to member-only deals.</p>
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
        <input type="submit" value="Signup!" />
      </div>
    </form>
    <p>Already have an account?</p>
    <button>Sign in</button>
    </div>
  )
}

export default SignupCard