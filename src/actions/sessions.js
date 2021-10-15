export const signup = details => {
  return {
    type: "SIGNUP",
    payload: details
  }
}

export const logout = () => {
  return {
    type: "LOGOUT"
  }
}