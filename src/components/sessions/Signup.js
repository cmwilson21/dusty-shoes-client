import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { signup } from '../../actions/sessions'
import {useHistory} from 'react-router-dom'

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



  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="first_name">First Name:</label> */}
         <input type="text" name="first_name" id="first_name" value={state.first_name} placeholder="First Name" autoFocus={true} onChange={handleChange}/>
        <br />
        {/* <label htmlFor="last_name">Last Name:</label> */}
         <input type="text" name="last_name" id="last_name" value={state.last_name} placeholder="Last Name" onChange={handleChange}/>
        <br />
        {/* <label htmlFor="email">Email:</label> */}
         <input type="text" name="email" id="email" value={state.email} placeholder="Enter your email" onChange={handleChange}/>
        <br />
        {/* <label htmlFor="password">Password:</label> */}
         <input type="password" name="password" id="password" value={state.password} placeholder="Create a password" onChange={handleChange}/>
         <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default Signup
