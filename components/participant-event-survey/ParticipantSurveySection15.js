import React from 'react'

export const ParticipantSurveySection15 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  
  return (
    <div className="px-7">
    <h1 className="font-black">
      {/* <span className="">15</span>  */}
      Would you say that in general your health is:
    </h1>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantHealth" value="Excellent" onChange={handleForm}/>
          <h3 className="">Excellent</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantHealth" value="Very good" onChange={handleForm}/>
          <h3 className="">Very good </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantHealth" value="Good" onChange={handleForm}/>
          <h3 className="">Good</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantHealth" value="Fair" onChange={handleForm}/>
          <h3 className="">Fair</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantHealth" value="Poor" onChange={handleForm}/>
          <h3 className="">Poor</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantHealth" value="Don’t know/Not sure" onChange={handleForm}/>
          <h3 className="">Don’t know/Not sure</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" name="participantHealth" value="Decline to answer" onChange={handleForm}/>
          <h3 className="">Decline to answer</h3>
        </label>
    </div>
  </div>
  )
}
