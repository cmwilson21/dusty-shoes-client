import React from 'react'

const TripNew = () => {
  return (
    <div>
      <form>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" autoFocus={true} placeholder="Enter city name" />
        <br />
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" placeholder="Enter country name" />
        <br />
        <label htmlFor="image url">Image:</label>
        <input type="text" id="image" name="image" placeholder="Enter image url" />
        <br />
        <label htmlFor="reason">Reason to Visit:</label>
        <textarea style={{resize: "none"}} id="reason" name="reason" />
        <br />
        <input type="submit" value="Add Trip" />
      </form>
    </div>
  )
}

export default TripNew
