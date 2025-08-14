import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <input type="text" placeholder='Enter your email'/><br /> <br />
        <input type="password" placeholder='Enter your password'/><br /> <br />
        <button>Login</button>
        <button>Sign Up</button>
    </div>
  )
}

export default LoginForm