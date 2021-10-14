import React from 'react'

const Signup = () => {
  return (
    <div>
      <form>
        {/* <label htmlFor="first_name">First Name:</label> */}
         <input type="text" name="first_name" id="first_name" placeholder="First Name" autoFocus={true}/>
        <br />
        {/* <label htmlFor="last_name">Last Name:</label> */}
         <input type="text" name="last_name" id="last_name" placeholder="Last Name"/>
        <br />
        {/* <label htmlFor="email">Email:</label> */}
         <input type="text" name="email" id="email" placeholder="Enter your email"/>
        <br />
        {/* <label htmlFor="password">Password:</label> */}
         <input type="password" name="password" id="password" placeholder="Create a password" />
         <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default Signup
