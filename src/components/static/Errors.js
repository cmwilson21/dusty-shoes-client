import React from 'react'
import {useSelector} from 'react-redux'

const Errors = () => {
  const errors = useSelector(state => state.errors);
  
  const errorMessages = errors.map((error, index) => <h4 key={index}>{error}</h4>)

  return (
    <div>
      {errorMessages}
    </div>
  )
}

export default Errors
