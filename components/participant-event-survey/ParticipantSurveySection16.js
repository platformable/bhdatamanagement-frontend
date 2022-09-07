import React from 'react'

export const ParticipantSurveySection16 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  return (
    <div className="p-5 py-10">
    <h2 className="font-black">
      <span className="">16</span> Do you have one person you think of as your personal doctor or health care provider?
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantPCP" value="Yes, only one" onChange={handleForm}/>
          <p className="">Yes, only one </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantPCP" value="Yes, more than one" onChange={handleForm}/>
          <p className="">Yes, more than one </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantPCP" value="No" onChange={handleForm}/>
          <p className="">No</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantPCP" value="Don’t know / Not sure" onChange={handleForm}/>
          <p className="">Don’t know / Not sure</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantPCP" value="Decline to answer" onChange={handleForm}/>
          <p className="">Decline to answer</p>
        </label>
        
    </div>
  </div>
  )
}
