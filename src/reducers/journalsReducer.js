const initialState = []

const journalsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "MOVE_TRIP":
      return [...state, action.payload]
    default:
      return state
  }
}

export default journalsReducer;