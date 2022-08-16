import React from 'react'

const PostEventReportSection20 = () => {
  return (
    <div className="p-5 bg-extra-light-violet rounded">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">20 </span>
        Describe any specific health questions you were asked or any feedback you received specifically about health issues at the event
      </h2>
      
      <span className="p-2 block h-32 bg-white break-all border-dark-violet rounded-md overflow-hidden" role="textbox" name="eventQuestions" contentEditable 
        placeholder="Please specify here"
  
      // onInput={(e) => setIssueFounded({...issueFounded, description: e.target.innerText})}
      ></span>
    </div>
  )
}

export default PostEventReportSection20