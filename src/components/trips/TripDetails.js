import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { NavLink} from 'react-router-dom';
import { baseURL } from '../../Globals';
// import {useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loadTrips } from '../../actions/trips';

const TripDetails = () => {
  const {id} = useParams();
  const history = useHistory();
  const [trip, setTrip] = useState({})
  const [loading, setLoading] = useState(true)
  const trips = useSelector(state => state.trips)
  


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
    // console.log('trip from details', data)
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
    const body = {been_there: !trip.been_there}
    const options = {
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    }
    fetch(`${baseURL}/api/v1/trips/${id}`, options)
    history.push(`/journal`)
  }



  // console.log("beenThere", trip.been_there)
  
  

  if(loading) {return <h2>Loading...</h2>}

  return (
    //  need a way to switch up the details page if trip.been_there === true ? <button>Add Review</button> else <button>Been There</button>
    <div>
      {/* try creating a trip card here that passes in the below stuff and also  */}
      <h2>{trip.city}, {trip.country}</h2>
      <img src={trip.image_url} alt="travel pic" />
      <br />
      {/* <NavLink to={`/journal`}><button onClick={handleClick} >Been There</button></NavLink> */}
      {/* <NavLink to={`/journal`}><button onClick={() => setTrip(trip.been_there === true)} >Been There</button></NavLink> */}
      {/* <NavLink to={`/journal`}><button onClick={() => setTrip(trip.been_there = !trip.been_there)} >Been There</button></NavLink> */}
      <button onClick={handleClick}>Been There</button>
    </div>
  )
}

export default TripDetails
