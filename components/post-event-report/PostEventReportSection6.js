import React from 'react'

const PostEventReportSection6 = () => {
  return (
    <div className="p-5 bg-extra-light-violet rounded">
    <h2 className="mb-3 font-black">
      <span className="text-color-violet">6</span> What was the event location address
    </h2>
    <input type="text" 
    name="locationAddress" 
    className='border-dark-violet rounded p-2 text-lg w-full'
    // onChange={handleForm}
    // defaultValue={eventForm.eventFinishTime}
    placeholder='Please specify here' 

/>
  </div>
  )
}

export default PostEventReportSection6