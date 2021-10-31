import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import requestingReducer from "./requestingReducer";
import sessionsReducer from "./sessionsReducer";
import tripsReducer from "./tripsReducer";
// import journalsReducer from "./journalsReducer"

export default combineReducers({
  errors: errorsReducer,
  requesting: requestingReducer,
  sessions: sessionsReducer,
  trips: tripsReducer
  // journals: journalsReducer
})