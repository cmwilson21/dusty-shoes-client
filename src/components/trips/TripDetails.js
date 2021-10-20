import React from 'react'
import { useSelector } from 'react-redux'

const TripDetails = () => {
  const trips = useSelector(state => state.trips)

  // this should be a fetch with use effect 
  // bring in user id to connect a trip to a user 


  return (
    <div>
      details go here
    </div>
  )
}

export default TripDetails
