import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../../actions/sessions'
import { useHistory } from 'react-router-dom'
import { Box, TextField, Button } from '@mui/material'

const Signup = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  })
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();

    // console.log('state', state)
    dispatch(signup(state, history))
    // history.push('/')
  }



  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       {/* <label htmlFor="first_name">First Name:</label> */}
  //        <input type="text" name="first_name" id="first_name" value={state.first_name} placeholder="First Name" autoFocus={true} onChange={handleChange}/>
  //       <br />
  //       {/* <label htmlFor="last_name">Last Name:</label> */}
  //        <input type="text" name="last_name" id="last_name" value={state.last_name} placeholder="Last Name" onChange={handleChange}/>
  //       <br />
  //       {/* <label htmlFor="email">Email:</label> */}
  //        <input type="text" name="email" id="email" value={state.email} placeholder="Enter your email" onChange={handleChange}/>
  //       <br />
  //       {/* <label htmlFor="password">Password:</label> */}
  //        <input type="password" name="password" id="password" value={state.password} placeholder="Create a password" onChange={handleChange}/>
  //        <input type="submit" value="Signup" />
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
        <h3>Please Signup Below</h3>
        <TextField required label="Required" variant="filled" id="outlined-required" name="first_name" value={state.first_name} placeholder="First Name" autoFocus={true} helperText="First Name" onChange={handleChange}/>
        <TextField required label="Required" variant="filled" name="last_name" id="filled-required" value={state.last_name} placeholder="Last Name" helperText="Last Name" onChange={handleChange} />
        <br />
        <TextField required label="Required" variant="filled" name="email" id="email" value={state.email} placeholder="Enter your email" helperText="Email" onChange={handleChange}/>
        <TextField required label="Required" variant="filled" type="password" name="password" id="password" value={state.password} placeholder="Create a password" helperText="Password" onChange={handleChange}/>
        <br />
        <Button type="submit">Signup</Button>
      </div>
    </Box>
  )
}

export default Signup
