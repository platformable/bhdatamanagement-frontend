import React from 'react'

export const ParticipantSurveySection13 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  return (
    <div className="px-7">
    <h1 className="font-black">
      <span className="">13</span> Within the past 12 months, the food you bought just didn't last and you didn't have money to get more.
    </h1>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Often true" name="participantFoodInsecurity2" onChange={handleForm}/>
          <h3 className="">Often true  </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Sometimes true" name="participantFoodInsecurity2" onChange={handleForm}/>
          <h3 className="">Sometimes true  </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Never true" name="participantFoodInsecurity2" onChange={handleForm}/>
          <h3 className="">Never true  </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Decline to answer" name="participantFoodInsecurity2" onChange={handleForm}/>
          <h3 className="">Decline to answer</h3>
        </label>
    </div>
  </div>
  )
}
