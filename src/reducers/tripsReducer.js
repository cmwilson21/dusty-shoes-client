// trips reducer will also be an array 
// added dummy data for now in intial state

const initialState = [{
  id: 1,
  city: "Dublin",
  country: "Ireland",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hyEfUZbIXRpTv0fOhnr41mo6FxwtJul2jg&usqp=CAU"
},
{
  id: 2,
  city: "Glasgow",
  country: "Scotland",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BDmv_Fhc5D5XuDRW-ijAigUOgW4l75VNVQ&usqp=CAU"
}]

const tripsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_TRIP":
      return [...state, action.payload]
    default:
      return state
  }
}

export default tripsReducer;