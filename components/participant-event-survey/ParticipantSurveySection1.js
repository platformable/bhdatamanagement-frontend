import React from "react";

export const ParticipantSurveySection1 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({...surveyForm, [e.target.name]: Number(e.target.value)})
  }
  return (
    <div className="px-7 mt-7">
      <h1 className="font-black">
        <span className="">1</span> What zip code do you live in or spend most
        of your time in?
      </h1>
      <div className="flex gap-x-5 mt-7">
        <h3>Zip Code</h3>
        <input
          type="number"
          placeholder="Eg. 10027"
          className="border-black rounded text-xl px-2 self-start p-1 ml-2 w-32"
          maxLength={5}
          name="participantZipCode"
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
