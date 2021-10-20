import React from 'react'
import {useSelector} from 'react-redux'


const Home = () => {
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const currentUser = useSelector(state => state.sessions.currentUser)


  if(loggedIn) {
    const firstName = `${currentUser.first_name}`
    return (
      <div>
        <h2>Welcome to Dusty Shoes, {firstName}!</h2>
        {/* <h2>Welcome to Dusty Shoes!</h2> */}
        <h3>When you travel, you trek over the dusty grounds of foreign soil.</h3>
        <h3>Get out there and get your shoes dusty.</h3>
      </div>
    )
  }
  return (
    <div>
      <h2>Welcome to Dusty Shoes!</h2>
      <h3>When you travel, you trek over the dusty grounds of foreign soil.</h3>
      <h3>Get out there and get your shoes dusty.</h3>
      <p>Please login or signup.</p>
    </div>
  )
}

export default Home
