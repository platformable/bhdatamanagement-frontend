import React from 'react'

const PostEventReportSection9 = () => {
  return (
    <div className="p-5 prounded flex-">
      <h2 className="font-black">
        <span className="">9 </span>
         How many STAFF MEMBERS were present?
      </h2>
      <div className='flex mt-5 gap-5 '>
        {/* <img src='/post_event_report/ADULT_volunteers_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        className="p-2 border-black rounded"
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