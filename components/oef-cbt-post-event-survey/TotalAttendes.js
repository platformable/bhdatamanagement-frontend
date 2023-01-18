import React from 'react'

const TotalAttendees = ({eventForm,setEventForm, isNumberKey}) => {
  const handleForm = (e) => {
    let {value} = e.target
      let finalValue;
      value > 300 ? finalValue = 300:finalValue=value
      setEventForm((previous) => ({
        ...previous,
        [e.target.name]:Number(finalValue)
      }))
  }
  return (
    <div className="px-7 mt-10 ">
      <h2 className="font-black">
      How many participants attended?
      </h2>
      <p>Please enter the total number only</p>
      <label className='flex mt-7 gap-5'>
      <input
        type="number"
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 300 && (e.target.value = 300) 
        }}
        maxLength={3}
        defaultValue={0 || eventForm.totalAttendees}
        className="p-4 border-black rounded w-20"
        name="totalAttendees"
        onChange={handleForm}
        onKeyDown={isNumberKey}
      />
    </label>
    </div>
  )
}

export default TotalAttendees