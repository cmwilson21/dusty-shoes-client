import { baseURL } from "../Globals";

export const signup = (details, history) => {
  return  async (dispatch) => {
      dispatch({type: "REQUESTING"});
      
      const resp = await fetch(baseURL + '/api/v1/signup', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
      })
      
      const data = await resp.json();
      // console.log('data', data)
      localStorage.setItem('jwt', data.jwt)
      dispatch({type: "LOGIN", payload: data})
      dispatch({type: "COMPLETED_REQUESTING"});
      history.push("/")
  }
}



export const login = (details, history) => {
  return async dispatch => {
    dispatch({type: "REQUESTING"});
    const resp = await fetch(baseURL + '/api/v1/login', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details)
    })
    const data = await resp.json();
    if(data.errors) {
      dispatch({ type: "ERRORS", payload: data.errors })
    } else {
      // console.log('data from login', data)
      localStorage.setItem('jwt', data.jwt);
      dispatch({ type: "CLEAR_ERRORS" })
      dispatch({ type: "LOGIN", payload: data });
    }
    dispatch({ type: "COMPLETED_REQUESTING" });
    history.push('/')
  }
}



export const getCurrentUser = () => {
  return async dispatch => {
    dispatch({type: "REQUESTING"})
    const resp = await fetch(baseURL + '/api/v1/get-current-user', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bearer ${localStorage.getItem('jwt')}`
      }
    })
    const data = await resp.json();
    const payload = {
      user: data.user,
      jtw: localStorage.getItem('jwt')
    }
    console.log(payload)
    if(data.user) {
      dispatch({type: "LOGIN", payload})
    }
    dispatch({type: "COMPLETED_REQUESTING"})
  }
}



export const logout = () => {
  localStorage.removeItem('jwt')
  return {
    type: "LOGOUT"
  }
}