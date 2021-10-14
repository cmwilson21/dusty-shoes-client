// we are using this reducer for setting the state of loading. in the beginning, the state of loading is usually true unti it is loaded.
// we start off returning intiial state by default after the switch type

const initialState = true;

const requestingReducer = (state=initialState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
}

export default requestingReducer;