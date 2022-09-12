import React from "react";

export const ParticipantSurveySection12 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: e.target.value })
  }
  return (
    <div className="px-7">
      <h2 className="font-black mb-7">
        Some people have made the following statements about their food
        situation
      </h2>
      <h2 className="font-black">
        {/* <span className="">12</span>  */}
        Within the past 12 months, you worried that your food would run out before you got money to buy more.
      </h2>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
      <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={1} value="Often true" name="participantFoodInsecurity1" onChange={handleForm}/>
          <h3 className="">Often true  </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={2} value="Sometimes true" name="participantFoodInsecurity1" onChange={handleForm}/>
          <h3 className="">Sometimes true  </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={3} value="Never true" name="participantFoodInsecurity1" onChange={handleForm}/>
          <h3 className="">Never true  </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="" id={4} value="Decline to answer" name="participantFoodInsecurity1" onChange={handleForm}/>
          <h3 className="">Decline to answer</h3>
        </label>
      </div>
    </div>
  );
};
