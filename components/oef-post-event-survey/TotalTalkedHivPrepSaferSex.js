import React from 'react'

const TotalTalkedHivPrepSaferSex = ({eventForm,setEventForm, isNumberKey}) => {
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
      How many people did you talk to, where you had a conversation about HIV, PrEP, or safer sex? (Please enter the total number only.)
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
        defaultValue={0 || eventForm.totalTalkedHivPrepSaferSex}
        className="p-4 border-black rounded w-20"
        name="totalTalkedHivPrepSaferSex"
        onChange={handleForm}
        onKeyDown={isNumberKey}
      />
    </label>
    </div>
  )
}

export default TotalTalkedHivPrepSaferSex