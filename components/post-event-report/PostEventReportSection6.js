import React from 'react'

const PostEventReportSection6 = ({eventForm,setEventForm}) => {

  return (
    <div className="px-7 mt-10 rounded">
    <h2 className="font-black">
      What was the event location address
    </h2>
    <p>To change this value, go to Edit Event after saving this Post-event Survey.</p>
    <label>
    <input type="text" 
    name="locationAddress" 
    className='border-black rounded mt-5  text-lg w-134'
    onChange={(e)=>{
      setEventForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }))}}
    placeholder='Please type address' 
    defaultValue={eventForm.locationAddress}
    disabled
/>
    </label>
    
  </div>
  )
}

export default PostEventReportSection6