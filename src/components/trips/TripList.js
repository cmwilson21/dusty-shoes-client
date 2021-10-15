import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'

const TripList = () => {
  const trips = useSelector(state => state.trips)


  const tripsLi = trips.map((trip) => <li key={trip.id}><NavLink to={`/trips/${trip.id}`}>{trip.city}, {trip.country}</NavLink></li>)

  return (
    <div>
      {tripsLi}
    </div>
  )
}

export default TripList
