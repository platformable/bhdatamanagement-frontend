import React from 'react'

const PostEventReportSection5 = ({eventForm,setEventForm, isNumberKey}) => {

  return (
    <div className="px-7 mt-10">
      <h2 className="font-black">What was the primary zip code of the event location?</h2>
      <p>In what zip code were you hoping the participants at the event will be coming from?</p>
    <div className="flex gap-x-5 items-center mt-7">
      <p>Zip code</p>
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
        e.target.value.length < 6 &&
        setEventForm((previous) => ({
        ...previous,
        [e.target.name]: Number(e.target.value),
      }))}}
      disabled
      defaultValue={eventForm?.zipCode!==0 ?eventForm?.zipCode : ""}
      onKeyDown={isNumberKey}
      />
      </label>
      
    </div>
    </div>
  )
}

export default PostEventReportSection5