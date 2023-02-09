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
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 space-between gap-5">
      <div className='grid gap-5'>
      {sexualOrientation?.slice(0, 6 / 2).filter(item => item.value !== "Unknown" ).map(option => (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className="" value={option.value} id={option.id} onChange={handleForm} name="participantOrientation" />
        <p className="">{option.value}</p>
      </label>
      ))}
      </div>
      <div className='grid gap-5'>
      {sexualOrientation?.slice(6 / 2).filter(item => item.value !== "Unknown" ).map(option => option.value !== 'Other' ? (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className="" value={option.value} id={option.id} onChange={handleForm} name="participantOrientation" />
        <p className="">{option.value}</p>
      </label>
      ): (
        <label className="flex flex-col md:flex-row gap-x-5 md:items-center md:gap-y-0 gap-y-5">
          <div className="flex  gap-5">
        <input type="radio" className="" value={option.value} id={option.id} onChange={handleForm} name="participantOrientation" />
        <p className="">{option.value}</p>
        </div>
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
    </div>
  )
}
