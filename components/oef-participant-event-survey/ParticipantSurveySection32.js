import React, { useState, useEffect } from "react";

export const ParticipantSurveySection32 = ({ surveyForm, setSurveyForm }) => {
  const [data, setData] = useState([]);

  const handleForm = (value) => {
    setSurveyForm((prev) => ({ ...prev, participantReferral: value }));
  };

  const options = [
    {
      id: 1,
      value: "Word of mouth",
    },
    {
      id: 2,
      value:
        "Faith-Based Organization / Place of worship (Eg. church, mosque, etc.)",
    },
    {
      id: 3,
      value: "Community-Based Organization",
    },
    {
      id: 4,
      value: "Social media",
    },
    {
      id: 5,
      value: "Signs/flyers",
    },
    {
      id: 6,
      value: "Referral from local health provider or services",
    },
    {
      id: 7,
      value: "Referral from another Black Health program",
    },
    {
      id: 8,
      value: "Government or city agency (E.g., DOH, DOE, Health + Hospitals)",
    },
    {
      id: 9,
      value: "Local Community Leader or Politician",
    },
    {
      id: 10,
      value: "NYCHA or public housing ",
    },
    {
      id: 11,
      value: "Other",
    },
  ];
  return (
    <div className="px-7 ">
      <h2 className="font-black">
        {/* <span className="">32 </span>  */}
        How did you hear about this event?
      </h2>
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 space-between gap-5">
        <div className="grid gap-5">
          {options
            ?.slice(0, Math.round(options.length / 2))
            .map((option, index) => (
              <label
                className="text-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-start md:items-center"
                key={index}
              >
                <div className="flex gap-x-5">
                  <input
                    type="radio"
                    name="participantReferral"
                    className=""
                    value={option.value}
                    id={index}
                    onChange={(e) => handleForm(e.target.value)}
                  />
                  {option.value}
                </div>
              </label>
            ))}
        </div>
        <div className="grid gap-5">
          {options
            ?.slice(Math.round(options.length / 2))
            .map((option, index) => (
              <label
                className="text-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-start md:items-center"
                key={index}
              >
                <div className="flex gap-x-5">
                  <input
                    type="radio"
                    name="participantReferral"
                    className=""
                    value={option.value}
                    id={index}
                    onChange={(e) => handleForm(e.target.value)}
                  />
                  {option.value}
                </div>
                {option.value === "Other" ? (
                <input
                  type="text"
                  // placeholder="Please specify"
                  onChange={(e) =>
                    setSurveyForm({
                      ...surveyForm,
                      participantReferralOther: e.target.value,
                    })
                  }
                  className="border-black rounded p-4 self-start p-1 w-full text-lg md:w-134"
                />) : null}
              </label>
            ))}
            
        </div>
      
      </div>
    </div>
  );
};
