import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/sessions'
import { useHistory } from 'react-router'
import { Box, TextField, Button } from '@mui/material'

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })
  const history = useHistory();
  const dispatch = useDispatch()

  const handleChange = e => {
    setState({
      ...state, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(state, history))
  }

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
      <h3>Please Login Below</h3>
      <TextField required id="standard-required"  helperText="Email"  label="Required" name="email" placeholder="Enter your email" autoFocus={true} onChange={handleChange}/>
      <TextField required  id="outlined-required" helperText="Password" label="Required" type="password" name="password" placeholder="Enter your password" onChange={handleChange}/>
      <br />
      <Button type="submit">Login</Button>
      </div>
      </Box>

  )


}

export default Login