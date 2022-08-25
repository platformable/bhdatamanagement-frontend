import React from 'react'

const PostEventReportSection6 = ({eventForm,setEventForm}) => {

  return (
    <div className="p-5 py-10 rounded">
    <h2 className="font-black">
      <span className="">6</span> What was the event location address
    </h2>
    <input type="text" 
    name="locationAddress" 
    className='border-black rounded mt-5 p-2 text-lg w-full'
    onChange={(e)=>{
      setEventForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }))}}
    placeholder='Please type address' 

/>
  </div>
  )
}

export default PostEventReportSection6