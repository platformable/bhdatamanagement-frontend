import React from 'react'
import { ethnicity } from '../../utils/sharedData'

export const ParticipantSurveySection4 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    if (e.target.value !== 'Yes, I identify with another Hispanic, Latino/a, or Spanish origin') setSurveyForm(prev => ({...prev, participantEthnicityOther: '' }))
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "ethnicityID": Number(e.target.id) })
  }
  return (
    <div className="px-7">
      <h2 className="font-black">
        {/* <span className="">4</span>  */}
        Are you of Hispanic, Latino/a, or Spanish origin?
      </h2>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
      {ethnicity.map(option => option.value !== 'Yes, I identify with another Hispanic, Latino/a, or Spanish origin'? (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className="" value={option.value} id={option.id} onChange={handleForm} name="participantEthnicity" />
        <p className="">{option.value}</p>
      </label>
      ) : (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className="" value={option.value} id={option.id} onChange={handleForm} name="participantEthnicity" />
        <p className="">{option.value}</p>
        <input
          type="text"
          placeholder="Please specify"
          onChange={(e) =>
            setSurveyForm({
              ...surveyForm,
              participantEthnicityOther: e.target.value,
            })
          }
          className="border-black rounded p-4 self-start p-1 w-full text-lg md:w-134"
        />
      </label>
      ))}
        
      </div>
    </div>
  )
}
