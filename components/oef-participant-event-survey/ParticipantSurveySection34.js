import React from "react";

export const ParticipantSurveySection34 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => setSurveyForm((prev) =>({...prev, [e.target.name]: e.target.value}));
  const options=[
    {
      id:1,
      value:"Yes"
    },
    {
      id:2,
      value:"No"
    },
    {
      id:3,
      value:"Don’t know / Not sure"
    },
  ]
  return (
    <div className="px-7 question-body">
      <h2 className="font-black">
      Have you ever heard of PEP (Post-Exposure Prophylaxis)?
      </h2>
      <div>
        {options.map((option, index) => (
          <label key={index}>
          <input type="radio"name="participantPEPKnowledge" value={option.value} onChange={handleForm}/>
          <p>{option.value}</p>
        </label>
        ))}
      </div>
    </div>
  );
};
