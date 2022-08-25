import React,{useState,useEffect} from 'react'

const PostEventReportSection16 = ({eventForm, setEventForm}) => {
  
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">16 </span>
        How many people did you text or call about the event?
      </h2>
      <div className='flex gap-5 justify-start'>
        {/* <img src='/post_event_report/text_call_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="tel"
        className="p-2 border-black rounded"
        placeholder="type a number"
        name="textOrCall"
        onChange={(e) =>
          setEventForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }
      />
    </div>
    </div>
  )
}

export default PostEventReportSection16