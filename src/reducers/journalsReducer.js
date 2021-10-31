const initialState = {
  journals: []
}

const journalsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_JOURNAL":
      return [...state, action.payload]
      // return {...state, journalEntry:{...state.journalEntry, payload}}
    case "SET_JOURNALS":
     return action.payload
    default:
      return state
  }
}

export default journalsReducer;