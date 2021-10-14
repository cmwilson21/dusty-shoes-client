// This is where current user, logged in?, and jwt token information will be held 
// for now i'm just setting a false current user in an object with info i will request from back end
// actions come in to play when you are handling or updating state - we send actions to the reducer to tell it how to handle the action using switch and action.type = the case being the description of the action. the action sent to the reducer will alwys be an object that will always have a type. at first we are just going to say default and return the state. 
// always do things non destructively using spread

const initialState = {
  currentUser: {
    id: 4,
    email: "test@test.com",
  },
  loggedIn: true
}

const sessionsReducer = (state=initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default sessionsReducer;
