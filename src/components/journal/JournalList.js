import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { loadTrips } from '../../actions/trips'

const JournalList = () => {
  const trips = useSelector(state => state.trips)
  const loggedIn = useSelector(state => state.sessions.loggedIn);
  const currentUser = useSelector(state => state.sessions.currentUser)
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    // clearErrors();
    if(loggedIn) {
      dispatch(loadTrips(localStorage.getItem('jwt'), currentUser))
      // console.log("trips list currentUser", currentUser)
    } else {
      history.push("/login")
    }
  }, [loggedIn])


  const tripsLi = trips.map((trip, index) => (
    <div key={index}>
      {trip.been_there === true ? (
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
    </div>
  )
}

export default JournalList
