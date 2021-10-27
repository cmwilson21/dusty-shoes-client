import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { loadTrips } from '../../actions/trips'
// import { deleteTrip } from '../../actions/trips'
// import { loadToGo } from '../../actions/trips'
import { baseURL } from '../../Globals';
// import { getCurrentUser } from '../../actions/sessions'
// import { Button } from '@mui/material'
import { Grid, Card, CardContent, Button } from '@mui/material'

const TripList = () => {
  const trips = useSelector(state => state.trips)
  const requesting = useSelector(state => state.requesting)
  const currentUser = useSelector(state => state.sessions.currentUser)
  const loggedIn = useSelector(state => state.sessions.loggedIn);
  const history = useHistory();
  const dispatch = useDispatch()



  useEffect(() => {
    // clearErrors();
    if (loggedIn) {
      dispatch(loadTrips(localStorage.getItem('jwt'), currentUser))
      // console.log("trips list currentUser", currentUser)
    } else {
      history.push("/login")
    }
  }, [loggedIn])


  const removeTrip = id => { trips.filter(trip => trip.id !== id) }


  const deleteTrip = async id => {
    await fetch(baseURL + `/api/v1/trips/${id}`, { method: "DELETE" })
    removeTrip(id);
    dispatch(loadTrips(localStorage.getItem('jwt'), currentUser))
  }


  const tripsLi = trips.map((trip, index) => (
    <div key={index} align="center">
      {trip.been_there === false ? (
        <Grid item md={3}>
          <Card style={{ marginTop: "12px" }}>
            <CardContent>
              <NavLink to={`/trips/${trip.id}`}>
                {trip.city}, {trip.country}
              </NavLink>
              <br />
              <img style={{marginTop: "8px"}} src={trip.image_url} />
            </CardContent>
            <Button onClick={() => deleteTrip(trip.id)}>Delete</Button>
          </Card>
        </Grid>
      ) : (
        null
      )}
    </div>
  ))

  if (requesting) {
    return <h1>Loading...</h1>
  }


  return (
    <div>
      {tripsLi}
    </div>
  )
}

export default TripList
