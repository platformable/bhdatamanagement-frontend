import React from 'react'

const PostEventReportSection15 = () => {
  return (
    <div className="p-5  rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">15 </span>
        How many people attended the event (or if it was street outreach or canvassing, etc, how many people did you engage with or provide resources to, etc)?
      </h2>
      <div className='flex gap-5'>
        <img src='/post_event_report/attended_event_icon.svg' alt='adult volunteers icon' />
      <input
        type="number"
        className="p-2 border-dark-violet rounded"
        placeholder="eg. 5"
        name="totalAttendees"
        // onChange={handleForm}
        // defaultValue={event?event.eventname:""}
      />
    </div>
    </div>
  )
}

export default PostEventReportSection15