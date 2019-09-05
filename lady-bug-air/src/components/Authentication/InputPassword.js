import React from 'react'

const InputPassword = ({loginPasswordDetail, password}) => {
  return (
    <div>
    <input
      onChange={(event) => {loginPasswordDetail(event.target.value)}}
      value={password}
      type="password"
      placeholder="Password"
      name="password"
      className="login_password"
      required
      autoComplete="current-password"
    />
  </div>
  )
}
export default InputPassword