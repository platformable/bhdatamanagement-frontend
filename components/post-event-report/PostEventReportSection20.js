import React from 'react'

const PostEventReportSection20 = ({eventForm,setEventForm}) => {
  
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="">20 </span>
        Describe any specific health questions you were asked or any feedback you received specifically about health issues at the event
      </h2>
      
      <textarea
        className="p-2 block w-full h-32 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        maxLength={500}
        name="eventQuestions"
        placeholder=""
        contentEditable
        onChange={(e) =>
          setEventForm((previous) => ({
            ...previous,
            [e.target.name]:e.target.value
          }))
        }
      />
    </div>
  )
}

export default PostEventReportSection20