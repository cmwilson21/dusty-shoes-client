import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTrip } from '../../actions/trips'
import { useHistory } from 'react-router'
import { Box, TextField, Button } from '@mui/material'

const TripNew = () => {
  const currentUser = useSelector(state => state.sessions.currentUser)
  const [state, setState] = useState({
    city: "",
    country: "",
    image_url: "",
    user_id: currentUser.id,
    been_there: false
  })
  const history = useHistory()
  const dispatch = useDispatch()

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // debugger

    dispatch(addTrip(state, currentUser))
    // console.log("tripnew user", currentUser.id)
    history.push('/trips');
  }

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor="city">City:</label>
  //       <input type="text" id="city" name="city" autoFocus={true} placeholder="Enter city name" value={state.city} onChange={handleChange}/>
  //       <br />
  //       <label htmlFor="country">Country:</label>
  //       <input type="text" id="country" name="country" placeholder="Enter country name" value={state.country} onChange={handleChange} />
  //       <br />
  //       <label htmlFor="image url">Image:</label>
  //       <input type="text" id="image" name="image_url" placeholder="Enter image url" value={state.image_url} onChange={handleChange} />
  //       <br />
  //       {/* <label htmlFor="reason">Reason to Visit:</label> */}
  //       {/* <textarea style={{resize: "none"}} id="reason" name="reason" onChange={handleChange} /> */}
  //       <br />
  //       <input type="submit" value="Add Trip" />
  //     </form>
  //   </div>
  // )


  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
    >
      <div>
      <h3>Please Enter A New Trip</h3>
        <TextField
    id="city" name="city" autoFocus={true} placeholder="Enter city name" value={state.city} onChange={handleChange}/>
        <TextField id="country" name="country" placeholder="Enter country name" value={state.country} onChange={handleChange} />
        <br/>
        <TextField id="image" name="image_url" placeholder="Enter image url" value={state.image_url} onChange={handleChange}/>
        <br />
        <Button type="submit">Add Trip</Button>
      </div>
    </Box>
  )


}

export default TripNew
