import React from 'react'

const Signup = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" placeholder="Enter your email" autoFocus={true}/>
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Create a password" />
        <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default Signup
