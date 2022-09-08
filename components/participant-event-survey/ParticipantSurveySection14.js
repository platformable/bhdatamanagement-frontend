import React from "react";

export const ParticipantSurveySection14 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  return (
    <div className="px-7">
      <h1 className="font-black">
        {/* <span className="">14</span>  */}
        Please indicate what type of health insurance you have:
      </h1>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={1} value="Private" name="participantInsurance" onChange={handleForm}/>
          <h3 className="">Private</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={2} value="Public" name="participantInsurance" onChange={handleForm}/>
          <h3 className="">Public</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={3} value="Both private and public" name="participantInsurance" onChange={handleForm}/>
          <h3 className="">Both private and public </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={4} value="Uninsured" name="participantInsurance" onChange={handleForm}/>
          <h3 className="">Uninsured</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={5} value="Not sure" name="participantInsurance" onChange={handleForm}/>
          <h3 className="">Not sure</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={6} value="Decline to answer" name="participantInsurance" onChange={handleForm}/>
          <h3 className="">Decline to answer </h3>
        </label>
        
      </div>
    </div>
  );
};
