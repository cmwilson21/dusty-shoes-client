import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/sessions'
import { useHistory } from 'react-router'

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
    console.log('state', state)
  }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" placeholder="Enter your email" autoFocus={true} onChange={handleChange}/>
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange}/>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login