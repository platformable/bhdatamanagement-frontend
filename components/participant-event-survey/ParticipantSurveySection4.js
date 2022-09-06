import React from 'react'
import { ethnicity } from '../../utils/sharedData'

export const ParticipantSurveySection4 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "ethnicityID": Number(e.target.id) })
  }
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">4</span> Are you of Hispanic, Latino/a, or Spanish origin?
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
      {ethnicity.map(option => (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className="mr-10 w-4 h-4" value={option.value} id={option.id} onChange={handleForm} name="participantEthnicity" />
        <p className="">{option.value}</p>
      </label>
      ))}
        
      </div>
    </div>
  )
}
