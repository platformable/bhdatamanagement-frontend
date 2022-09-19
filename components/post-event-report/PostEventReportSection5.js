import React from 'react'

const PostEventReportSection5 = ({eventForm,setEventForm}) => {

  return (
    <div className="px-7 mt-10">
      <h2 className="font-black">What was the primary zip code of the event location?</h2>
      <h3>In what zip code were you hoping the participants at the event will be coming from?</h3>
    <div className="flex gap-x-5 items-center mt-7">
      <h3>Zip code</h3>
      <label>
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
      defaultValue={eventForm?.zipCode}
      />
      </label>
      
    </div>
    </div>
  )
}

export default PostEventReportSection5