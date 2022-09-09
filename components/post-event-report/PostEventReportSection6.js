import React from 'react'

const PostEventReportSection6 = ({eventForm,setEventForm}) => {

  return (
    <div className="px-7 mt-10 rounded">
    <h1 className="font-black">
      What was the event location address
    </h1>
    <input type="text" 
    name="locationAddress" 
    className='border-black rounded mt-7 p-4 text-lg w-full'
    onChange={(e)=>{
      setEventForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }))}}
    placeholder='' 

/>
  </div>
  )
}

export default PostEventReportSection6