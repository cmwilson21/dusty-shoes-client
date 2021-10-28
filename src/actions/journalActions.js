import { baseURL } from "../Globals";

// export const moveTrip = () => {
//   return async (dispatch) => {
//     dispatch({type: "REQUESTING"});
//     const resp = await fetch(baseURL + `/api/v1/trips/${id}`, {
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//       }
//     })
//     const data = await resp.json();
//     dispatch({type: "MOVE_TRIPS", payload: data})
//     dispatch({type: "COMPLETED_REQUESTING"})
//   }
// }