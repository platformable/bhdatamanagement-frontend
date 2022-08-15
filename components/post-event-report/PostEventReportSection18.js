import React from 'react'

const PostEventReportSection18 = () => {
  return (
    <div className="p-5 bg-extra-light-violet rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">18 </span>
        Describe the highlights from the event
      </h2>
      <span className="p-2 block h-32 bg-white break-all border-dark-violet rounded-md overflow-hidden" role="textbox" name="eventHighlights" contentEditable 
      // onInput={(e) => setIssueFounded({...issueFounded, description: e.target.innerText})}
      ></span>
    </div>
  )
}

export default PostEventReportSection18