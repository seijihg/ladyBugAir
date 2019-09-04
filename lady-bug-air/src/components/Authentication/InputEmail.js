import React from 'react'

const InputEmail = ({loginEmailDetail, email}) => {
  return (
  <div>
      <input
        onChange={(event) => loginEmailDetail(event.target.value)}
        value={email}
        type="email"
        placeholder="Email address"
        name="email"
        className="login_email"
        required
        autoComplete="email"
      />
    </div>
  )
}
export default InputEmail