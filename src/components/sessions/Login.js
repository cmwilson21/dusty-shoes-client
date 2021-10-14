import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" placeholder="Enter your email" autoFocus={true}/>
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter your password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login