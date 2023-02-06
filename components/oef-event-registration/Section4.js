import React from 'react'

const isNumberKey = (e) => {
    const invalidChars = [
      "-",
      "+",
      "e",
    ];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    } 
}


const Section4 = ({eventForm,setEventForm}) => {

  return (
    <div className="">
      <h2 className="font-black">Please list the primary zip code where the outreach was held, or where the majority of participants attending the event are expected to be living?</h2>
    <div className="flex gap-x-5 items-center mt-7">
      <p>Zip code</p>
      <label>
      <input 
      type="number" 
      placeholder="Eg. 10027"
      className="border-black rounded p-4 self-start w-32"
      maxLength={5}
      name="eventZipCode"
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
      defaultValue={eventForm?.eventZipCode!==0 ?eventForm?.eventZipCode : ""}
      onKeyDown={isNumberKey}
      />
      </label>
      
    </div>
    </div>
  )
}

export default Section4