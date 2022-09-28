import React from 'react'

export const ParticipantSurveySection13 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  return (
    <div className="px-7">
    <h2 className="font-black">
      {/* <span className="">13</span> */}
       Within the past 12 months, the food you bought just didn't last and you didn't have money to get more.
    </h2>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Often true" name="participantFoodInsecurity2" onChange={handleForm}/>
          <p className="">Often true  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Sometimes true" name="participantFoodInsecurity2" onChange={handleForm}/>
          <p className="">Sometimes true  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Never true" name="participantFoodInsecurity2" onChange={handleForm}/>
          <p className="">Never true  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Decline to answer" name="participantFoodInsecurity2" onChange={handleForm}/>
          <p className="">Decline to answer</p>
        </label>
    </div>
  </div>
  )
}
