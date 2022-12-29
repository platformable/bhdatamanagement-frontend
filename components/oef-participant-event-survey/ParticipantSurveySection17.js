import React from 'react'

export const ParticipantSurveySection17 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  return (
    <div className="px-7">
    <h2 className="font-black">
      {/* <span className="">17</span>  */}
      About how long has it been since you last visited a doctor for a routine checkup?
    </h2>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantRoutine" value="Within the last 6" onChange={handleForm}/>
          <p className="">Within the last 6 months</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantRoutine" value="Within the past year (Anytime between 7- 12 months ago)" onChange={handleForm}/>
          <p className="">Within the past year (Anytime between 7- 12 months ago)</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantRoutine" value="Within the past 2 years (1 year but less than 2 years ago)" onChange={handleForm}/>
          <p className="">Within the past 2 years (1 year but less than 2 years ago)</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantRoutine" value="Within the past 5 years (2 years but less than 5 years ago)" onChange={handleForm}/>
          <p className="">Within the past 5 years (2 years but less than 5 years ago)</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantRoutine" value="5 or more years ago," onChange={handleForm}/>
          <p className="">5 or more years ago</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantRoutine" value="Don’t know / Not sure" onChange={handleForm}/>
          <p className="">Don’t know / Not sure</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantRoutine" value="Never" onChange={handleForm}/>
          <p className="">Never</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantRoutine" value="Decline to answer" onChange={handleForm}/>
          <p className="">Decline to answer</p>
        </label>
    </div>
  </div>
  )
}
