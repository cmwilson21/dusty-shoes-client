import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { logout } from '../../actions/sessions'


const NavBar = () => {
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const currentUser = useSelector(state => state.sessions.currentUser)
  const dispatch = useDispatch();

  const logoutClick = e => {
    e.preventDefault();
    dispatch(logout())
  }

  
  
  if(loggedIn) {
    const firstName = `${currentUser.first_name}`
    return (
      <div>
        <NavLink className="navbar_link" to="/">Home</NavLink>
        <NavLink className="navbar_link" to="/trips">Trips</NavLink>
        <NavLink className="navbar_link" to="/trips/new">Add A Trip</NavLink>
        <NavLink className="navbar_link" to="/journal">Travel Journal</NavLink>
        <NavLink className="navbar_link" to="/logout" onClick={logoutClick}>Logout</NavLink>
        <h2>Hello, {firstName}</h2>
      </div>
    )
  }
  return (
    <div>
      <NavLink className="navbar_link" to="/">Home</NavLink>
      {/* <NavLink className="navbar_link" to="/trips">Trips</NavLink> */}
      {/* <NavLink className="navbar_link" to="/trips/new">Add A Trip</NavLink> */}
      {/* <NavLink className="navbar_link" to="/journal">Travel Journal</NavLink> */}
      <NavLink className="navbar_link" to="/login">Login</NavLink>
      <NavLink className="navbar_link" to="/signup">Signup</NavLink>
    </div>
  )
}

export default NavBar
