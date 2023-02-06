import React from 'react';
import { sexualOrientation } from '../../utils/sharedData';

export const ParticipantSurveySection6 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    if (e.target.value !== 'Other') setSurveyForm({...surveyForm, participantOrientationOther: '' })
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "orientationID": Number(e.target.id) })
  }
  return (
    <div className="px-7">
      <h2 className="font-black">
        {/* <span className="">6</span>  */}
        How do you describe your sexual orientation? 
      </h2>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
      {sexualOrientation.map(option => option.value !== 'Other' ? (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className="" value={option.value} id={option.id} onChange={handleForm} name="participantOrientation" />
        <p className="">{option.value}</p>
      </label>
      ) : (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className="" value={option.value} id={option.id} onChange={handleForm} name="participantOrientation" />
        <p className="">{option.value}</p>
        <input
          type="text"
          placeholder="Please specify"
          onChange={(e) =>
            setSurveyForm({
              ...surveyForm,
              participantOrientationOther: e.target.value,
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
