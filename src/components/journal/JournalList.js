import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { loadTrips } from '../../actions/trips'
import { Grid, Card, Paper, CardContent, Button, Container } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';



const JournalList = () => {
  const trips = useSelector(state => state.trips)
  const loggedIn = useSelector(state => state.sessions.loggedIn);
  const currentUser = useSelector(state => state.sessions.currentUser)
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    // clearErrors();
    if (loggedIn) {
      dispatch(loadTrips(localStorage.getItem('jwt'), currentUser))
      // console.log("trips list currentUser", currentUser)
    } else {
      history.push("/login")
    }
  }, [loggedIn])

  // console.log("trips", trips)


  const tripsLi = trips.map((trip, index) => (
    <div key={index} align="center">
      {trip.been_there === true ? (
        // <li>
        <Grid item md={3}>
          {/* <Paper> */}
            <Card style={{marginTop: "12px"}}>
                <CardContent><NavLink to={`/trips/${trip.id}`}>{trip.city}, {trip.country}</NavLink></CardContent>
                <CheckIcon />
            </Card>
          {/* </Paper> */}
         </Grid>
        // </li>
      ) : (
        null
      )}
    </div>
  ))

  return (
    // <Container>
    //   <Grid container>
    //     {trips.map((trip, index) => (
    //       <Grid item key={index} xs={12} md={6} lg={4}>
    //         {trip.been_there === true ? (
    //           <NavLink to={`/trips/${trip.id}`}>
    //           <Paper>{trip.city}, {trip.country}</Paper>
    //           </NavLink>
    //         ) : (
    //           null
    //         )}
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Container>
    <div>
      {tripsLi}
    </div>
  )
}

export default JournalList
