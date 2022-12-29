import React from 'react';
import { gender } from '../../utils/sharedData';

export const ParticipantSurveySection5 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "genderID": Number(e.target.id) })
  }
  return (
    <div className="px-7">
      <h2 className="font-black">
        {/* <span className="">5</span>  */}
        How do you describe yourself? 
      </h2>
      <div className="mt-7 grid grid-cols-2 space-between gap-5">
      {gender.map(option => (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className=" " value={option.value} id={option.id} onChange={handleForm} name="participantGender" />
        <p className="">{option.value}</p>
      </label>
      ))}
        
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Decline to answer" onChange={handleForm} name="participantGender" />
          <p className="">Decline to answer </p>
        </label>   
      </div>
    </div>
  )
}
