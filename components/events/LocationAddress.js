import React from 'react'

const LocationAddress = ({eventForm,setEventForm}) => {

  return (
    <div className=" rounded">
    <h2 className="font-black">
      What was the event location address
    </h2>
    <label>
    <input type="text" 
    name="locationAddress" 
    className='border-black rounded mt-5  text-lg w-134'
    onChange={(e)=>{
      setEventForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }))}}
    placeholder='Type full address' 
    defaultValue={eventForm.locationAddress}
    
/>
    </label>
    
  </div>
  )
}

export default LocationAddress