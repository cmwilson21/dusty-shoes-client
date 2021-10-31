// import React, {useState, useEffect} from 'react'
// import {useHistory, useParams} from 'react-router-dom'
// import { baseURL } from '../../Globals'

// const JournalNew = () => {
//   const [trip, setTrip] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [state, setState] = useState("")
//   const history = useHistory();
//   // const {tripId} = useParams()

//   // useEffect(() => {
//   //   const loadTrip = async () => {
//   //     const resp = await fetch(baseURL + `/api/v1/trips/${trip.id}`)
//   //     const data = await resp.json();
//   //     setTrip(data);
//   //     setLoading(false);
//   //   }
//   //   console.log("tripID", trip.id)
//   //   loadTrip();
//   // }, [tripId])

//   if (loading) {return <h3>Loading...</h3>}

//   const handleChange = e => {
//     setState(e.target.value)
//   }

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const data = {content: state}
//     const headers = {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     }
//     const options = {
//       method: "POST",
//       headers,
//       body: JSON.stringify(data)
//     }
//     await fetch(baseURL + `/api/v1/trips/${trip.id}/journals`, options)
//     history.push(`/trips/${tripId}`)
//   }


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" id="content" value={state} onChange={handleChange} autoFocus={true} />
//         <input type="submit" value="Enter journal entry" />
//       </form>
//     </div>
//   )
// }

// export default JournalNew
