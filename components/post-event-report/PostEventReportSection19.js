import React from 'react'

const PostEventReportSection19 = () => {
  return (
    <div className="p-5 py-10 rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">19 </span>
        Describe any challenges and how you overcame them, and any lessons learned
      </h2>
      
        <textarea
        className="p-2 block w-full h-32 bg-white break-all border-dark-violet rounded-md overflow-hidden"
        role="textbox"
        name="eventChallenges"
        placeholder=""
        contentEditable
      />
    </div>
  )
}

export default PostEventReportSection19