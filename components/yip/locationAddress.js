import React from 'react'
import InputValidationAddress from '../InputValidationAddress'

const LocationAddress = ({title,eventForm,setEventForm,stateValue,guidanceText}) => {

  return (
    <div className=" rounded">
    <h2 className="font-black">
      {title}
      <span className='text-xl text-red-500 ml-2'>*required</span>
    </h2>
    {guidanceText && <p>{guidanceText}</p>}
    <label>
    <InputValidationAddress setForm={setEventForm} name={'locationAddress'} defaultValue={eventForm && eventForm[stateValue]}/>
    </label>
    
  </div>
  )
}

export default LocationAddress