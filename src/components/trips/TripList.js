import React, {useEffect} from 'react'
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

  const removeTrip = id => {trips.filter(trip => trip.id !== id)}

  const deleteTrip = async id => {
    await fetch(`http://localhost:3001/api/v1/trips/${id}`, {method: "DELETE"})
    removeTrip(id);
    // history.push("/trips")
  }

  const tripsLi = trips.map((trip) => <li key={trip.id}><NavLink to={`/trips/${ trip.id }`}>{ trip.city }, {trip.country}</NavLink><button onClick={() => deleteTrip(trip.id)}>Delete</button></li>)

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
