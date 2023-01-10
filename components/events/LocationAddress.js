import React from 'react'
import InputValidationAddress from '../InputValidationAddress'

const LocationAddress = ({eventForm,setEventForm}) => {

  return (
    <div className=" rounded">
    <h2 className="font-black">
      What was the event location address
      <span className='text-xl text-red-500 ml-2'>*required</span>
    </h2>
    <label>
    {/* <input type="text" 
    name="locationAddress" 
    className='border-black rounded mt-5  text-lg w-134'
    onChange={(e)=>{
      setEventForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }))}}
    placeholder='Type full address' 
    defaultValue={eventForm.locationAddress}
    
/> */}
    <InputValidationAddress setForm={setEventForm} name={'locationAddress'} defaultValue={eventForm.locationAddress}/>
    </label>
    
  </div>
  )
}

export default LocationAddress