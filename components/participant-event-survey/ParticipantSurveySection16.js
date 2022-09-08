import React from 'react'

export const ParticipantSurveySection16 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  return (
    <div className="px-7">
    <h1 className="font-black">
      <span className="">16</span> Do you have one person you think of as your personal doctor or health care provider?
    </h1>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantPCP" value="Yes, only one" onChange={handleForm}/>
          <h3 className="">Yes, only one </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantPCP" value="Yes, more than one" onChange={handleForm}/>
          <h3 className="">Yes, more than one </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantPCP" value="No" onChange={handleForm}/>
          <h3 className="">No</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantPCP" value="Don’t know / Not sure" onChange={handleForm}/>
          <h3 className="">Don’t know / Not sure</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantPCP" value="Decline to answer" onChange={handleForm}/>
          <h3 className="">Decline to answer</h3>
        </label>
        
    </div>
  </div>
  )
}
