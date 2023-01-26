import React from 'react'

const TotalAttendees = ({eventForm,setEventForm, isNumberKey}) => {
  const handleForm = (e) => {
    let {value} = e.target
      let finalValue;
      value > 500 ? finalValue = 500:finalValue=value
      setEventForm((previous) => ({
        ...previous,
        [e.target.name]:Number(finalValue)
      }))
  }
  return (
    <div className="px-7 mt-10 ">
      <h2 className="font-black">
      Total number of people at event
      </h2>
      <label className='flex mt-7 gap-5'>
      <input
        type="number"
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 500 && (e.target.value = 500) 
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