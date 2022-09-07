import React from 'react'

const PostEventReportSection15 = ({eventForm, setEventForm}) => {
  const handleForm = (e) => {
    let {value} = e.target
      let finalValue;
      value > 1000 ? finalValue = 1000:finalValue=value
      setEventForm((previous) => ({
        ...previous,
        [e.target.name]:Number(finalValue)
      }))
  }
 
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
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 1000 && (e.target.value = 1000) 
        }}
        maxLength={4}
        defaultValue={0}
        className="p-2 border-black rounded w-20"
        name="totalAttendees"
        onChange={handleForm}
      />
    </div>
    </div>
  )
}

export default PostEventReportSection15