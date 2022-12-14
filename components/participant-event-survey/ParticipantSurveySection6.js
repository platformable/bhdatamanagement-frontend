import React from 'react';
import { sexualOrientation } from '../../utils/sharedData';

export const ParticipantSurveySection6 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "orientationID": Number(e.target.id) })
  }
  return (
    <div className="px-7">
      <h2 className="font-black">
        {/* <span className="">6</span>  */}
        How do you describe your sexual orientation? 
      </h2>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
      {sexualOrientation.map(option => (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className="" value={option.value} id={option.id} onChange={handleForm} name="participantOrientation" />
        <p className="">{option.value}</p>
      </label>
      ))}
        
         
      </div>
    </div>
  )
}
