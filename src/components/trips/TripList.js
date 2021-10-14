import React from 'react'
import { useSelector } from 'react-redux'

const TripList = () => {
  const trips = useSelector(state => state.trips)


  const tripsLi = trips.map((trip) => <li key={trip.id}>{trip.city}, {trip.country}</li>)

  return (
    <div>
      {tripsLi}
    </div>
  )
}

export default TripList
