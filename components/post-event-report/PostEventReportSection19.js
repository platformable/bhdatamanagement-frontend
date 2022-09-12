import React from 'react'

const PostEventReportSection19 = ({eventForm,setEventForm}) => {
 
  return (
    <div className="px-7 mt-10 rounded">
      <h2 className="mb-7 font-black">
        Describe any challenges and how you overcame them, and any lessons learned
      </h2>
      
        <textarea
        className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
        role="textbox"
        name="eventChallenges"
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

export default PostEventReportSection19