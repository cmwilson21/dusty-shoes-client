import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/sessions'


const NavBar = () => {
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const currentUser = useSelector(state => state.sessions.currentUser)
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutClick = e => {
    e.preventDefault();
    dispatch(logout())
    history.push('/')
  }



  if (loggedIn) {
    const firstName = `${currentUser.first_name}`
    return (
      <div>
        <ul className="nav-ul">
          <li className="nav-li"><NavLink className="navbar_link" to="/">Home</NavLink></li>
          <li className="nav-li"><NavLink className="navbar_link" to="/trips">Trips</NavLink></li>
          <li className="nav-li"><NavLink className="navbar_link" to="/trips/new">Add A Trip</NavLink></li>
          <li className="nav-li"><NavLink className="navbar_link" to="/journal">Travel Journal</NavLink></li>
          <li className="nav-li"><NavLink className="navbar_link" to="/logout" onClick={logoutClick}>Logout</NavLink></li>
        <p style={{color: "white", textAlign: "right", marginRight: "55px"}}>Where to next, {firstName}?</p>
        </ul>
      </div>
    )
  }
  return (
    <div>
      <ul className="nav-ul">
        <li className="nav-li"><NavLink className="navbar_link" to="/">Home</NavLink></li>
        {/* <NavLink className="navbar_link" to="/trips">Trips</NavLink> */}
        {/* <NavLink className="navbar_link" to="/trips/new">Add A Trip</NavLink> */}
        {/* <NavLink className="navbar_link" to="/journal">Travel Journal</NavLink> */}
        <li className="nav-li"><NavLink className="navbar_link" to="/login">Login</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="/signup">Signup</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar
