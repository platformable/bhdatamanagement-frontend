import React from "react";
import {age} from "../../utils/sharedData.js"

const Age = ({surveyForm, setSurveyForm}) => {

  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "ageID": Number(e.target.id) })
  }
  return (
    <div className="px-7">
      <h2 className="font-black">
        {/* <span className="">2</span>  */}
        What is your age?
      </h2>
      <div className="mt-7 grid md:grid-cols-2 ">
        <div className="grid space-between gap-5">
        {age.slice(1, Math.round(age.length / 2)).map((opt, index) => (
          <label key={index} className='flex gap-x-5 items-center'>
          <input type="radio" className="border-black rounded" value={opt.value} id={opt.id} name="participantAgeRange" onChange={handleForm} />
          <p className="w-40">{opt.value}</p>
        </label>
        ))}
        </div>
        <div className="grid space-between gap-5">
        {age.slice(Math.round(age.length / 2)).map((opt, index) => (
          <label key={index} className='flex gap-x-5 items-center'>
          <input type="radio" className="border-black rounded" value={opt.value} id={opt.id} name="participantAgeRange" onChange={handleForm} />
          <p className="w-40">{opt.value}</p>
        </label>
        ))}
        <label className='flex gap-x-5 items-center'>
          <input type="radio" className="border-black rounded" value={'Decline to answer'}  name="participantAgeRange" onChange={handleForm} />
          <p className="w-40">Decline to answer</p>
        </label>
        </div>
       
        
      </div>
    </div>
  );
};

export default Age;
