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
    <div className="px-7 mt-10 rounded">
      <h1 className="mb-7 font-black">
        How many people did you text or call about the event?
      </h1>
      <label className='flex gap-5 justify-start'>
        {/* <img src='/post_event_report/text_call_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 1000 && (e.target.value = 1000) 
        }}
        maxLength={4}
        className="p-4 border-black rounded w-20"
        defaultValue={0}
        name="textOrCall"
        onChange={handleForm}
      />
    </label>
    </div>
  )
}

export default PostEventReportSection16