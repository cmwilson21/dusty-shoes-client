export const setErrors = (errors) => {
  return (dispatch) => {
    dispatch({type: "ERRORS", payload: errors})
  }
}

export const clearErrors = () => {
  return (dispatch) => {
    dispatch({type: "CLEAR_ERRORS"})
  }
}