import React,{useState,useEffect} from 'react'

const PostEventReportSection16 = ({eventForm, setEventForm}) => {
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
        <span className="">16 </span>
        How many people did you text or call about the event?
      </h2>
      <div className='flex gap-5 justify-start'>
        {/* <img src='/post_event_report/text_call_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 1000 && (e.target.value = 1000) 
        }}
        maxLength={4}
        className="p-2 border-black rounded w-20"
        defaultValue={0}
        name="textOrCall"
        onChange={handleForm}
      />
    </div>
    </div>
  )
}

export default PostEventReportSection16