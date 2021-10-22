import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { NavLink} from 'react-router-dom';
import { baseURL } from '../../Globals';
// import {useHistory} from 'react-router-dom'
// import { useSelector } from 'react-redux'

const TripDetails = () => {
  const {id} = useParams();
  const history = useHistory();
  const [trip, setTrip] = useState({})
  const [loading, setLoading] = useState(true)
  // const trips = useSelector(state => state.trips)
  // const [journal, setJournal] = useState([])
  // const [user, setUser] = useState({})
  // const requesting = useSelector(state => state.requesting)
  // const [beenThere, setBeenThere] = useState([])
  // const [clickedTrips, setClickedTrips] = useState([])


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
    console.log('trip from details', data)
  }

  // const loadUser = async () => {
  //   const resp = await fetch(`http://localhost:3001/api/v1/users/${id}`, {
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //       "Authorization": `bearer ${localStorage.getItem('jwt')}`
  //     }
  //   });
  //   const data = await resp.json();
  //   setUser(data);
  //   console.log("user from details", data)
  // }

  const load = async () => {
    await loadTrip();
    // await loadUser();
    setLoading(false)
  }

  useEffect(() => {
    load();
  }, [id])


  // const beenThere = trip_id => {trips.find(trip => trip.id == trip_id)}
  // or use the .filter to make a new list of the old places, minus the one you want to move. 

  // const moveTrip = async trip_id => {
  //   await fetch(`http://localhost:3001/api/v1/trips/${id}`)
  //   beenThere(id);
  //   history.push("/journal")
  //   console.log("beenThere id", trip_id)
  // }

  // const handleClick = (destination) => {
  //   setClickedTrips([...clickedTrips, destination])
  //   console.log(destination)
  // }

  // const moveTrip = (destination) => {
  //   const newList = clickedTrips.filter((clickedTrip) => destination.id !== clickedTrip.id);
  //   setClickedTrips(newList)
  // }



  if(loading) {return <h2>Loading...</h2>}

  return (
    <div>
      {/* try creating a trip card here that passes in the below stuff and also  */}
      <h2>{trip.city}, {trip.country}</h2>
      <img src={trip.image_url} alt="travel pic" />
      <br />
      <NavLink to={`/journal`}><button  >Been There</button></NavLink>
    </div>
  )
}

export default TripDetails
