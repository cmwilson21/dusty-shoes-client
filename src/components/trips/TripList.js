import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getCurrentUser } from '../../actions/sessions'
import { useHistory } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { loadTrips } from '../../actions/trips'

const TripList = () => {
  const trips = useSelector(state => state.trips)
  const requesting = useSelector(state => state.requesting)
  const currentUser = useSelector(state => state.sessions.currentUser)


  const history = useHistory();
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.sessions.loggedIn);



  useEffect(() => {
    // clearErrors();
    if(loggedIn) {
      dispatch(loadTrips(localStorage.getItem('jwt'), currentUser))
      // console.log("trips list currentUser", currentUser)
    } else {
      history.push("/login")
    }
  }, [loggedIn])



  const tripsLi = trips.map((trip) => <li key={trip.id}><NavLink to={`/trips/${ trip.id }`}>{ trip.city }, {trip.country}</NavLink></li>)

  if(requesting) {
    return <h1>Loading...</h1>
  }
  

  return (
    <div>
      {tripsLi}
    </div>
  )
}

export default TripList
