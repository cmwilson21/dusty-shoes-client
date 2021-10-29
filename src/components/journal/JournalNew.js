import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addJournal } from '../../actions/journalActions'
import { useHistory, useParams } from 'react-router'
// import { baseURL } from '../../Globals';


const JournalNew = () => {
  const currentUser = useSelector(state => state.sessions.currentUser)
  const trips = useSelector(state => state.trips)
  const [state, setState] = useState({
    content: "",
    // trip_id: trips.id
    trip_id: ""
  })
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  // const [trip, setTrip] = useState({})

 const tripData = trips.map(trip => trip.id)
 console.log("tripData", tripData)

 
 function handleChange(event) {
   setState(event.target.value);
  }
  
  console.log("trip from new journal", trips)
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addJournal(state, tripData, currentUser.id))
    console.log("id from new", id)
    console.log("current user journal new", currentUser.id)
    history.push(`/trip/${id}`)
    // console.log("id from params", id)
    // console.log("new journal", tripData.id)
  }



  return (
    <div>
      <p>Add new journal entry form here. This would actually be an update once the "Been there" button has been clicked. It will redirect you to a page where the "reason to visit" changes to a journal entry.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="journal">Journal:</label>
        <input type="text" name="journal" id="journal" placeholder="Enter a few notes about your trip" onChange={handleChange} value={state.content}/>
        <input type="submit" value="Add Journal" />
      </form>
    </div>
  )
}

export default JournalNew
