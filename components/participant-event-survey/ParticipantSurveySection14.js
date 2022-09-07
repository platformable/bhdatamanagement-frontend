import React from "react";

export const ParticipantSurveySection14 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">14</span> Please indicate what type of Health Insurance you have:
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" id={1} value="Private" name="participantInsurance" onChange={handleForm}/>
          <p className="">Private</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" id={2} value="Public" name="participantInsurance" onChange={handleForm}/>
          <p className="">Public</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" id={3} value="Both private and public" name="participantInsurance" onChange={handleForm}/>
          <p className="">Both private and public </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" id={4} value="Uninsured" name="participantInsurance" onChange={handleForm}/>
          <p className="">Uninsured</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" id={5} value="Not sure" name="participantInsurance" onChange={handleForm}/>
          <p className="">Not sure</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-6 h-6" id={6} value="Decline to answer" name="participantInsurance" onChange={handleForm}/>
          <p className="">Decline to answer </p>
        </label>
        
      </div>
    </div>
  );
};
