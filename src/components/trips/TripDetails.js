import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux'

const TripDetails = () => {
  // const trips = useSelector(state => state.trips)
  const {id} = useParams();
  const [trip, setTrip] = useState({})
  // const [journal, setJournal] = useState([])
  const [user, setUser] = useState({})
  // const requesting = useSelector(state => state.requesting)
  const [loading, setLoading] = useState(true)


  const loadTrip = async () => {
    const resp = await fetch(`http://localhost:3001/api/v1/trips/${id}`, {
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

  const loadUser = async () => {
    const resp = await fetch(`http://localhost:3001/api/v1/users/${id}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bearer ${localStorage.getItem('jwt')}`
      }
    });
    const data = await resp.json();
    setUser(data);
    console.log("user from details", data)
  }

  const load = async () => {
    await loadTrip();
    await loadUser();
    setLoading(false)
  }

  useEffect(() => {
    load();
  }, [id])


  if(loading) {return <h2>Loading...</h2>}

  return (
    <div>
      <h2>{trip.city}, {trip.country}</h2>
      <img src={trip.image_url} alt="travel pic" />
      <br />
      <NavLink to={`/journal`}><button>Been There</button></NavLink>
    </div>
  )
}

export default TripDetails
