import React from 'react'

const PostEventReportSection5 = () => {
  return (
    <div className="p-5 py-10">
      <h2 className="font-black"><span className="text-color-violet">5</span> What was the Primary Zip Code of the event Location? (In what zip code were you hoping the participants at the event will be coming from?)</h2>
    <div className="flex gap-x-3 mt-5">
      <h3>Zip Code</h3>
      <input type="text" 
      placeholder="Please enter a 5-digit zip code"
      className="border-dark-violet rounded px-2 self-start p-1 ml-2"/>
    </div>
    </div>
  )
}

export default PostEventReportSection5