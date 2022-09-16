import React from 'react'

const PostEventReportSection6 = ({eventForm,setEventForm}) => {

  return (
    <div className="px-7 mt-10 rounded">
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
    placeholder='Please type address' 

/>
    </label>
    
  </div>
  )
}

export default PostEventReportSection6