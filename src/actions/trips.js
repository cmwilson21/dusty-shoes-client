import { baseURL } from "../Globals"



export const addTrip = (details, token) => {
  return async (dispatch) => {
    const resp = await fetch(baseURL + `/api/v1/trips/`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bear ${token}`
      },
      body: JSON.stringify(details)
    })
    const data = await resp.json()
    dispatch({ type: "ADD_TRIP", payload: data })
  }
}


export const loadTrips = (token, currentUser) => {
  // console.log("current user trips action 2", currentUser)
  return async dispatch => {
    dispatch({ type: "REQUESTING" });
    const resp = await fetch(baseURL + `/api/v1/users/${currentUser.id}/trips`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
      }
    })
    const data = await resp.json();
    dispatch({ type: "SET_TRIPS", payload: data })
    // console.log("data from trips action", data)
    // debugger
    dispatch({ type: "COMPLETED_REQUESTING" })
  }
}