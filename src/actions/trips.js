// this is updating state 

export const addTrip = (details, currentUser) => {
  const payload = {...details,
    user_id: currentUser.id
  }

  return {
    type: "ADD_TRIP",
    payload
  }
}


export const loadTrips = (token, currentUser) => {
  // console.log("current user trips action 2", currentUser)
  return async dispatch => {
    dispatch({type: "REQUESTING"});
    const resp = await fetch(`http://localhost:3001/api/v1/users/${currentUser.id}/trips`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
      }
    })
    const data = await resp.json();
    dispatch({type: "SET_TRIPS", payload: data})
    // console.log("data from trips action", data)
    dispatch({type: "COMPLETED_REQUESTING"})
  }
}