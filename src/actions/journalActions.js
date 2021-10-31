// import { baseURL } from "../Globals";

// export const addJournal = (details, token, trip_id) => {
//   return async (dispatch) => {
//     const resp = await fetch(baseURL + `/api/v1/trips/${trip_id}/journals`, {
//       method: "POST",
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "Authorization": `bearer ${token} `
//       },
//       body: JSON.stringify(details)
//     })
//     console.log("details", details)
//     // console.log("trip", trip)
//     const data = await resp.json()
//     console.log("data from journal actions", data)
//     dispatch({type: "ADD_JOURNAL", payload: data})
//   }
// }

// export const loadJournals = (token, currentUser, trip_id) => {
//   return async dispatch => {
//     dispatch({type: "REQUESTING"});
//     const resp = await fetch(baseURL + `api/v1/users/${currentUser}/trips/${trip_id}/journal`,
//     {
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "Authorization": `bearer ${token}`
//       }
//     })
//     const data = await resp.json();
//     dispatch({type: "SET_TRIPS", payload:data})
//     dispatch({type: "COMPLETED_REQUESTING"})
//   }
// }