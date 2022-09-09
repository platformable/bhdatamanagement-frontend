import React from 'react'

const PostEventReportSection20 = ({eventForm,setEventForm}) => {
  
  return (
    <div className="px-7 mt-10 rounded">
      <h2 className="mb-7 font-black">
        Describe any specific health questions you were asked or any feedback you received specifically about health issues at the event
      </h2>
      
      <textarea
        className="p-4 text-lg block w-full h-52 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="eventQuestions"
        placeholder=""
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