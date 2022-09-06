import React from "react";

export const ParticipantSurveySection1 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: Number(e.target.value)})
  }
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">1</span> What zip code do you live in or spend most
        of your time in?
      </h2>
      <div className="flex gap-x-3 mt-5">
        <h3>Zip Code</h3>
        <input
          type="number"
          placeholder="Eg. 10027"
          className="border-black rounded px-2 self-start p-1 ml-2 w-60"
          maxLength={5}
          name="zipCode"
          onKeyUp={(e) => {
            e.target.value.length > 5 &&
              (e.target.value = e.target.value.slice(0, 4));
          }}
          onWheelCapture={(e) => e.target.blur()}
        onChange={handleForm}
        />
      </div>
    </div>
  );
};