import React from 'react';
import { gender } from '../../utils/sharedData';

const Gender = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    if (e.target.value !== 'Other' ) setSurveyForm(prev => ({...prev, participantGenderOther: ''}))
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "genderID": Number(e.target.id) })
  }
  return (
    <div className="px-7">
      <h2 className="font-black">
        {/* <span className="">5</span>  */}
        How do you describe yourself? 
      </h2>
      <div className="mt-7 grid md:grid-cols-2 space-between gap-5">
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
        <label className="flex flex-col md:flex-row gap-5 md:items-center">
        <div className='flex gap-x-5 items-center'>
        <input type="radio" className=" " value={option.value} id={option.id} onChange={handleForm} name="participantGender" />
        <p className="">{option.value}</p>
        </div>
        <input
          type="text"
          placeholder="Please specify"
          onChange={(e) =>
            setSurveyForm({
              ...surveyForm,
              participantGenderOther: e.target.value,
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
      <label className="flex gap-x-5 items-center">
          <input type="radio" className="" value="Decline to answer" id={8} onChange={handleForm} name="participantGender" />
          <p className="">Decline to answer </p>
        </label>

       
      </div> 
           
      </div>
    </div>
  )
}
export default Gender;