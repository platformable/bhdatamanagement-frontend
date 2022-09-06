import React from "react";
import {age} from "../../utils/sharedData.js"

export const ParticipantSurveySection2 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value, "ageID": Number(e.target.id) })
  }
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">2</span> What is your age?
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        {age.map(opt => (
          <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" id={opt.id} name="participantAgeRange" onChange={handleForm} />
          <p className="w-20">{opt.value}</p>
        </label>
        ))}
        
      </div>
    </div>
  );
};
