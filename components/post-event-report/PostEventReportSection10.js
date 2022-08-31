import React from 'react'

const PostEventReportSection10 = ({eventForm,setEventForm}) => {
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
    <div className="p-5  rounded">
      <h2 className=" font-black">
        <span className="">10 </span>
         How many INTERNS/APPRENTICES were present?
      </h2>
      <div className='flex mt-5 gap-5'>
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
        className="p-2 border-black rounded"
        placeholder="Type a number"
        name="internPresent"
        onChange={handleForm}
      />
    </div>
    </div>
  )
}

export default PostEventReportSection10