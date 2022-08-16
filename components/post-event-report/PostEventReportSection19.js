import React from 'react'

const PostEventReportSection19 = () => {
  return (
    <div className="p-5  rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">19 </span>
        Describe any challenges and how you overcame them, and any lessons learned
      </h2>
      
      <span className="p-2 block h-32 bg-white break-all border-dark-violet rounded-md overflow-hidden" role="textbox" name="eventChallenges" contentEditable 
        placeholder="Please specify here"
  
      // onInput={(e) => setIssueFounded({...issueFounded, description: e.target.innerText})}
      ></span>
    </div>
  )
}

export default PostEventReportSection19