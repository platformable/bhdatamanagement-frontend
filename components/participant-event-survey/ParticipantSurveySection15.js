import React from 'react'

export const ParticipantSurveySection15 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  
  return (
    <div className="p-5">
    <h2 className="font-black">
      <span className="">15</span> Would you say that in general your health is:
    </h2>
    <div className="mt-5 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantHealth" value="Excellent" onChange={handleForm}/>
          <p className="">Excellent</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantHealth" value="Very good" onChange={handleForm}/>
          <p className="">Very good </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantHealth" value="Good" onChange={handleForm}/>
          <p className="">Good</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantHealth" value="Fair" onChange={handleForm}/>
          <p className="">Fair</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantHealth" value="Poor" onChange={handleForm}/>
          <p className="">Poor</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantHealth" value="Don’t know/Not sure" onChange={handleForm}/>
          <p className="">Don’t know/Not sure</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" name="participantHealth" value="Decline to answer" onChange={handleForm}/>
          <p className="">Decline to answer</p>
        </label>
    </div>
  </div>
  )
}
