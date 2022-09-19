import React,{useState,useEffect} from 'react'

const PostEventReportSection16 = ({eventForm, setEventForm, isNumberKey}) => {
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
      <h2 className="mb-7 font-black">
        How many people did you text or call about the event?
      </h2>
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
        defaultValue={0 || eventForm.textOrCall}
        name="textOrCall"
        onChange={handleForm}
        onKeyDown={isNumberKey}
      />
    </label>
    </div>
  )
}

export default PostEventReportSection16