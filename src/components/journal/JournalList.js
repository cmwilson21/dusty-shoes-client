import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const JournalList = () => {
  const trips = useSelector(state => state.trips)



  const tripsLi = trips.map((trip, index) => (
    <div key={index}>
      {trip.been_there == true ? (
        <li>
        <NavLink to={`/trips/${trip.id}`}>
          {trip.city}, {trip.country}
        </NavLink>
      </li>
        ) : (
          null
      )}
    </div>
  ))

  return (
    <div>
      {tripsLi}
      <p>add journal entry list here you have to pull in the trips somehow</p>
    </div>
  )
}

export default JournalList
