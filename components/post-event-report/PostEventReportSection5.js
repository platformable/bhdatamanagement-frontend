import React from 'react'

const PostEventReportSection5 = ({eventForm,setEventForm}) => {

  return (
    <div className="px-7 mt-10">
      <h1 className="font-black">What was the Primary Zip Code of the event Location?</h1><h2> (In what zip code were you hoping the participants at the event will be coming from?)</h2>
    <div className="flex gap-x-5 items-center mt-7">
      <h3>Zip Code</h3>
      <input 
      type="number" 
      placeholder="Eg. 10027"
      className="border-black rounded p-4 self-start w-32"
      maxlength={5}
      name="zipCode"
      // max={9999}
      // min={0}
      onKeyUp={(e) => {
        e.target.value.length > 5 && (e.target.value = e.target.value.slice(0,5)) 
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