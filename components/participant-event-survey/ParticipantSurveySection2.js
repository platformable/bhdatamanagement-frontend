import React from "react";
import {age} from "../../utils/sharedData.js"

export const ParticipantSurveySection2 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "ageID": Number(e.target.id) })
  }
  return (
    <div className="px-7">
      <h1 className="font-black">
        {/* <span className="">2</span>  */}
        What is your age?
      </h1>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        {age.map(opt => (
          <label className="flex gap-x-5 items-center">
          <input type="radio" className="border-black rounded" id={opt.id} name="participantAgeRange" onChange={handleForm} />
          <h3 className="w-20">{opt.value}</h3>
        </label>
        ))}
        
      </div>
    </div>
  );
};
