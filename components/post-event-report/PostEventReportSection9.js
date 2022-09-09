import React from 'react'

const PostEventReportSection9 = ({eventForm,setEventForm}) => {
  const handleForm = (e) => {
    let {value} = e.target
      let finalValue;
      value > 100 ? finalValue = 100:finalValue=value
      setEventForm((previous) => ({
        ...previous,
        [e.target.name]:Number(finalValue)
      }))
  }
  return (
    <div className="px-7 rounded mt-10">
      <h1 className="font-black">
         How many STAFF MEMBERS were present?
      </h1>
      <div className='flex mt-7 gap-5'>
        {/* <img src='/post_event_report/ADULT_volunteers_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 100 && (e.target.value = 100) 
        }}
        maxLength={3}
        defaultValue={0}
        className="p-4 border-black rounded w-20"
        placeholder="Type a number"
        name="staffPresent"
        onChange={handleForm}
      />
    </div>
      </div>
      
  )
}

export default PostEventReportSection9