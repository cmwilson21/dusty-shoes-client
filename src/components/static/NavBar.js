import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'


const NavBar = () => {
  const loggedIn = useSelector(state => state.sessions.loggedIn)

  if(loggedIn) {
    return (
      <div>
        <NavLink className="navbar_link" to="/">Home</NavLink>
        <NavLink className="navbar_link" to="/trips">Trips</NavLink>
        <NavLink className="navbar_link" to="/trips/new">Add A Trip</NavLink>
        <NavLink className="navbar_link" to="/journal">Travel Journal</NavLink>
      </div>
    )
  }
  return (
    <div>
      <NavLink className="navbar_link" to="/">Home</NavLink>
      <NavLink className="navbar_link" to="/trips">Trips</NavLink>
      <NavLink className="navbar_link" to="/trips/new">Add A Trip</NavLink>
      <NavLink className="navbar_link" to="/journal">Travel Journal</NavLink>
      <NavLink className="navbar_link" to="/login">Login</NavLink>
      <NavLink className="navbar_link" to="/signup">Signup</NavLink>
    </div>
  )
}

export default NavBar
