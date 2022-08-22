import React from 'react'

const PostEventReportSection15 = () => {
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">15 </span>
        How many people attended the event (or if it was street outreach or canvassing, etc, how many people did you engage with or provide resources to, etc)?
      </h2>
      <div className='flex gap-5'>
        {/* <img src='/post_event_report/attended_event_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        className="p-2 border-black rounded"
        placeholder="type a number"
        name="totalAttendees"
        // onChange={handleForm}
        // defaultValue={event?event.eventname:""}
      />
    </div>
    </div>
  )
}

export default PostEventReportSection15