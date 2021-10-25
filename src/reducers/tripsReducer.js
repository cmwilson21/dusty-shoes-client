// trips reducer will also be an array 
// added dummy data for now in intial state

const initialState = []

// const tripsReducer = (state=initialState, action) => {
//   switch(action.type) {
//     case "ADD_TRIP":
//       return [...state, action.payload]
//     case "SET_TRIPS":
//       return action.payload
//     case "DELETE_TRIP":
//       return state.filter(({id}) => id !==action.data);
//     default:
//       return state
//   }
// }




const tripsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_TRIP":
      return [...state, action.payload]
    case "SET_TRIPS":
      return action.payload
    default:
      return state
  }
}

export default tripsReducer;