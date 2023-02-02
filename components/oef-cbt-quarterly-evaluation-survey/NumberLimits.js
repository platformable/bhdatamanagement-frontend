import React from 'react'

export default function NumberLimits({stateValue, setSurveyForm,title,surveyForm}) {

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


  const handleForm = (e) => {
    let {value} = e.target
      let finalValue;
      value > 300 ? finalValue = 300:finalValue=value
      setSurveyForm({...surveyForm,[stateValue]:Number(finalValue)})
  }
  return (
    <div className="px-7 mt-10 ">
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
          value > 300 && (e.target.value = 300) 
        }}
        maxLength={3}
        defaultValue={0 || surveyForm[stateValue]}
        className="p-4 border-black rounded w-20"
        name={stateValue}
        onChange={handleForm}
        onKeyDown={isNumberKey}
      />
    </label>
    </div>
  )
}
