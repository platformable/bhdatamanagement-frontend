import React from 'react'

const PostEventReportSection9 = () => {
  return (
    <div className="p-5 py-10 rounded flex-">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">9 </span>
         How many STAFF MEMBERS were present?
      </h2>
      <div className='flex gap-5 '>
        <img src='/post_event_report/ADULT_volunteers_icon.svg' alt='adult volunteers icon' />
      <input
        type="number"
        className="p-2 border-dark-violet rounded"
        placeholder="Type a number"
        name="staffPresent"
        // onChange={handleForm}
        // defaultValue={event?event.eventname:""}
      />
    </div>
      </div>
      
  )
}

export default PostEventReportSection9