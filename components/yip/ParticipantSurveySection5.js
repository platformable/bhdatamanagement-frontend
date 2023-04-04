import React from 'react';
//import { gender } from '../../utils/sharedData';

export const ParticipantSurveySection5 = ({surveyForm, setSurveyForm}) => {


const gender = [
    { id: 1, value: "Female" },
    { id: 2, value: "Male" },
    { id: 3, value: "Transgender female" },
    { id: 4, value: "Transgender male" },
    { id: 5, value: "Gender non-conforming" },
    { id: 6, value: "Non-binary" },
    { id: 7, value: "Decline to answer" },
    { id: 8, value: "Other gender identity" },
  ];

  const handleForm = (e) => {
    
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "genderID": Number(e.target.id) })
  }
  return (
    <div className="">
      <h2 className="font-black">
        {/* <span className="">5</span>  */}
        How do you describe your gender? 
      </h2>
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 space-between gap-5">
      <div className='grid gap-5'>
      {gender?.slice(0, 8 / 2).map(option => (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className=" " value={option.value} id={option.id} onChange={handleForm} name="participantGender" />
        <p className="">{option.value}</p>
      </label>
      ))}
      </div>
      <div className='grid gap-5'>
      {gender?.slice(8 / 2).map(option => option.value === 'Other gender identity' ? (
        <label className="flex flex-col md:flex-row gap-x-5 md:items-center md:gap-y-0 gap-y-5">
          <div className="flex  gap-5">
        <input type="radio" className=" " value={option.value} id={option.id} onChange={handleForm} name="participantGender" />
        <p className="">{option.value}</p>
        </div>
        <input
          type="text"
          placeholder="Please specify"
          onChange={(e) =>
            setSurveyForm({
              ...surveyForm,
              participantGenderOther: e.target.value
            })
          }
          className="border-black rounded p-4 self-start p-1 w-full text-lg md:w-134"
        />
      </label>
      ) : (
        <label className="flex gap-x-5 items-center">
        <input type="radio" className=" " value={option.value} id={option.id} onChange={handleForm} name="participantGender" />
        <p className="">{option.value}</p>
      </label>
      ))}
      
      </div> 
           
      </div>
    </div>
  )
}
