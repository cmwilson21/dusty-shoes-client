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