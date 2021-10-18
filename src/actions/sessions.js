export const signup = (details, history) => {
  return  async (dispatch) => {
      dispatch({type: "REQUESTING"});
      
      const resp = await fetch('http://localhost:3001/signup', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
      })
      
      const data = await resp.json();
      // localStorage.setItem('jwt', data.jwt)
      dispatch({type: "LOGIN", payload: data})
      dispatch({type: "COMPLETED_REQUESTING"});
      history.push("/")
  }
}

export const login = (details, history) => {
  return async dispatch => {
    dispatch({type: "REQUESTING"});
    const resp = await fetch('http://localhost:3001/login', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details)
    })
    const data = await resp.json();
    // if(data.errors) {
      // dispatch({ type: "ERRORS", payload: data.errors })
    // } else {
      // localStorage.setItem('jwt', data.jwt);
      dispatch({ type: "CLEAR_ERRORS" })
      dispatch({ type: "LOGIN", payload: data });
    // }
    dispatch({ type: "COMPLETED_REQUESTING" });
    history.push('/')
  }
}

export const logout = () => {
  return {
    type: "LOGOUT"
  }
}