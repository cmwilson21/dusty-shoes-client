// import { responsiveFontSizes } from '@mui/material';
// import React, {useState, useEffect} from 'react'
// import { useHistory } from 'react-router';
// import { baseURL } from '../../Globals';
// import JournalEntries from './JournalEntries';

// const JournalCard = ({trip}) => {
//   // const [state, setState] = useState("")
//   const [entry, setEntry] = useState({
//     content: "",
//     trip_id: trip.id
//   })
//   const [displayJournal, setDisplayJournal] = useState([])
//   const [oneTrip, setOneTrip] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const history = useHistory();
//   // const currentUser = useSelector(state => state.sessions.currentUser)
//   // const dispatch = useDispatch()

//   useEffect(() => {
//     const loadTrip = async () => {
//       const resp = await fetch(baseURL + `/api/v1/trips/${trip.id}`)
//       const data = await resp.json();
//       setOneTrip(data);
//       setLoading(false);
//     }
//     console.log("tripID", trip.id)
//     loadTrip();
//   }, [trip.id])

  
  
//   function handleChange(event) {
//     setEntry(event.target.value);
//   }
  
  
//   const handleSubmit = async e => {
//     e.preventDefault();
//     const form = {content: entry, trip_id: trip.id}
//     const headers = {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     }
//     const options = {
//       method: "POST",
//       headers, 
//       body: JSON.stringify(form)
//     }
//     const resp = await fetch(baseURL + `/api/v1/trips/${trip.id}/journals`, options)
//     const data = await resp.json()
//     //  debugger
//     setDisplayJournal([...displayJournal, data])
//     // console.log("data from card", data)
//     //  console.log("entry", entry)
//     history.push(`/trips/${trip.id}/`)
//   }
  
//   // useEffect(() => {
//   //   const loadJournals = async () => {
//   //     const headers = {"Authorization": `bearer ${localStorage.getItem('jwt')}`}
//   //     const resp = await fetch(baseURL + `/api/v1/trips/${trip.id}/journals`, headers)
//   //     const data = await resp.json();
//   //     // debugger
//   //     setDisplayJournal([data])
//   //   }
//   //   loadJournals();
    
//   // }, [])

//   const loadJournal = async () => {
//     const resp = await fetch(baseURL + `/api/v1/trips/${trip.id}/journals`, {
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "Authorization": `bearer ${localStorage.getItem('jwt')}`
//       }
//     })
//     const data = await resp.json();
//     setDisplayJournal([data])
//   }

//   const load = async () => {
//     await loadJournal();
//     setLoading(false)
//   }

//   useEffect(() => {
//     load();
//   }, [])
  
//   if (loading) {return <h3>Loading...</h3>}
  
//   return (
//     <div>
//       <div id="form">

    
//       <p>add the new journal form down here? {oneTrip.city}</p>
//       <form onSubmit={handleSubmit}>
//         <input type="text" id="content" name="review" placeholder="Add a journal entry about your trip." onChange={handleChange} value={entry.content}/>
//         <input type="submit" />
//       </form>
   
 
//       </div>
//       {displayJournal[0] !== undefined ? displayJournal.map((journal) => <JournalEntries journal={journal} key={journal.id} />) : null}
//     </div>



//   )
// }

// export default JournalCard