import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { baseURL, imgDetails } from '../../Globals';
import { Grid, Card, CardContent, Button } from '@mui/material'




const TripDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [trip, setTrip] = useState({})
  const [loading, setLoading] = useState(true)



  const loadTrip = async () => {
    const resp = await fetch(baseURL + `/api/v1/trips/${id}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bearer ${localStorage.getItem('jwt')}`
      }
    })
    const data = await resp.json();
    setTrip(data)
  }



  const load = async () => {
    await loadTrip();
    // await loadUser();
    setLoading(false)
  }

  useEffect(() => {
    load();
  }, [id])

  const handleClick = () => {
    const headers = {
      "Accept": 'application/json',
      "Content-Type": "application/json"
    }
    const body = { been_there: !trip.been_there }
    const options = {
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    }
    fetch(`${baseURL}/api/v1/trips/${id}`, options)
    history.push(`/journal`)
  }



  if (loading) { return <h2>Loading...</h2> }

  return (
    <div align="center">
      <Grid item>
          <Card sx={{maxWidth: 345}} style={{ marginTop: "12px" }} item>
        <CardContent >{trip.city}, {trip.country}
          <br />
          <img style={{...imgDetails}} src={trip.image_url} alt="travel pic" />
          <br />
          <p style={{textDecoration: "underline"}}>Why do you want to go?</p>
          <p>{trip.reason}</p>
        </CardContent>
        {/* {trip.been_there ? <Button onClick={handleJournal}>Add Journal</Button> : <Button onClick={handleClick}>Been There</Button>} */}
        {trip.been_there ? "Hope you enjoyed your trip. On to the next one!" : <Button onClick={handleClick}>Been There</Button>}
      </Card>
    </Grid>
    </div >
  )
}

export default TripDetails
