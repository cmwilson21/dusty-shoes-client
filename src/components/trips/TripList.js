import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getCurrentUser } from '../../actions/sessions'
import { useHistory } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { loadTrips } from '../../actions/trips'

const TripList = () => {
  const trips = useSelector(state => state.trips)
  const requesting = useSelector(state => state.requesting)
  // const loggedIn = useSelector(state => state.sessions.loggedIn)x
  const history = useHistory();
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.sessions.loggedIn);


  useEffect(() => {
    // clearErrors();
    if(loggedIn) {
      dispatch(loadTrips(localStorage.getItem('jwt')))
    } else {
      history.push("/login")
    }
  }, [loggedIn])


  // useEffect(() => {
  //   // clearErrors();
  //   if(loggedIn) {
  //     dispatch(loadTrips(token))
  //   } else {
  //     history.push("/login")
  //   }
  // }, [loggedIn])

  // useEffect(() => {
  //   // dispatch(getCurrentUser())
  //   if(loggedIn)
  //   dispatch(loadTrips(localStorage.getItem('jwt')))
  // }, [])


  const tripsLi = trips.map((trip) => <li key={trip.id}><NavLink to={`/tripss/${ trip.id }`}>{ trip.city }, {trip.country}</NavLink></li>)

  if(requesting) {
    return <h1>Loading...</h1>
  }
  
  // useEffect(() => {
  //   if(loggedIn) {
  //     dispatch(loadTrips(localStorage.getItem('jwt')))
  //   } else {
  //     history.push("/login")
  //   }
  // }), [loggedIn]
  
  
  // const tripsLi = trips.map((trip) => <li key={trip.id}><NavLink to={`/trips/${trip.id}`}>{trip.city}, {trip.country}</NavLink></li>)

  // if(requesting) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <div>
      {tripsLi}
    </div>
  )
}

export default TripList
