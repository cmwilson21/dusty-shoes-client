import React from 'react'
import {useSelector} from 'react-redux'


const Home = () => {
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const currentUser = useSelector(state => state.sessions.currentUser)


  if(loggedIn) {
    const firstName = `${currentUser.first_name}`
    return (
      <div>
        <h3>Welcome to Dusty Shoes, {firstName}.</h3>
        <h4>When you travel, you trek through the dust of foreign soil.</h4>
        <img className="home" src="https://images.unsplash.com/photo-1490525535718-60047f3c8a09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" alt="travel pic" />
        <h4>Get out there and get your shoes dusty.</h4>
      </div>
    )
  }
  return (
    <div>
      <h3>Welcome to Dusty Shoes</h3>
      <h4>When you travel, you trek over the dusted grounds of foreign soil.</h4>
      <img className="home" src="https://images.unsplash.com/photo-1490525535718-60047f3c8a09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" alt="travel pic" />
      <h4>Get out there and get your shoes dusty.</h4>
      <p>Please login or signup.</p>
    </div>
  )
}

export default Home
