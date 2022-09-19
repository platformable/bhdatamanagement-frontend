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
    <div className="px-7 mt-10 rounded">
      <h2 className="font-black">
        How many people attended the event <br/>
      </h2>
      <h3>If it was street outreach / canvassing, how many people did you engage with and provide resources to?</h3>

      <label className='mt-7 flex gap-5'>
        {/* <img src='/post_event_report/attended_event_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 1000 && (e.target.value = 1000) 
        }}
        maxLength={4}
        defaultValue={0 || eventForm.totalAttendees}
        className="p-4 border-black rounded w-20"
        name="totalAttendees"
        onChange={handleForm}
      />
    </label>
    </div>
  )
}

export default PostEventReportSection15