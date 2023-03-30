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


const TotalAttendees = ({eventForm,setEventForm,title,stateValue}) => {
  const handleForm = (e) => {
    let {value} = e.target
      let finalValue;
      value > 150 ? finalValue = 150:finalValue=value
      setEventForm((previous) => ({
        ...previous,
        [e.target.name]:Number(finalValue)
      }))
  }
  return (
    <div className="">
      <h2 className="font-black">
      {title}
      </h2>
      <p>Please enter the total number only</p>
      <label className='flex mt-7 gap-5'>
      <input
        type="number"
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 150 && (e.target.value = 150) 
        }}
        maxLength={3}
        defaultValue={0 || eventForm[stateValue]}
        className="p-4 border-black rounded w-20"
        name={[stateValue]}
        onChange={handleForm}
        onKeyDown={isNumberKey}
      />
    </label>
    </div>
  )
}

export default TotalAttendees