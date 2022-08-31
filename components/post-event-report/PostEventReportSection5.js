import React from 'react'

const PostEventReportSection5 = ({eventForm,setEventForm}) => {

  return (
    <div className="p-5 py-10">
      <h2 className="font-black"><span className="">5</span> What was the Primary Zip Code of the event Location? (In what zip code were you hoping the participants at the event will be coming from?)</h2>
    <div className="flex gap-x-3 mt-5">
      <h3>Zip Code</h3>
      <input 
      type="number" 
      placeholder="Please enter a 4-digit zip code"
      className="border-black rounded px-2 self-start p-1 ml-2"
      maxlength={4}
      name="zipCode"
      max={9999}
      min={0}
      onKeyUp={(e) => {
        e.target.value.length > 4 && (e.target.value = e.target.value.slice(0,4)) 
      }}
      onWheelCapture={(e) => e.target.blur()}
      onChange={(e)=>{
        setEventForm((previous) => ({
        ...previous,
        [e.target.name]: Number(e.target.value),
      }))}}
      />
    </div>
    </div>
  )
}

export default PostEventReportSection5