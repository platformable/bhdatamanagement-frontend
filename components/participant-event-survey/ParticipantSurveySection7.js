import React from "react";
import { roles } from "../../utils/sharedData";

export const ParticipantSurveySection7 = ({ surveyForm, setSurveyForm }) => {
  const handleForm = (e) => {
    setSurveyForm({
      ...surveyForm,
      [e.target.name]: e.target.value,
      roleID: Number(e.target.id),
    });
  };
  return (
    <div className="px-7">
      <h1 className="font-black">
        {/* <span className="">7</span>  */}
        What is your role?
      </h1>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        {roles.map((option, index) => {
          if (index === roles.length - 1) {
            return (
              <label className="text-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-start md:items-center">
                <div className="flex gap-x-5">
                <input
                  type="radio"
                  className=""
                  value={option.value}
                  id={option.id}
                  onChange={handleForm}
                  name="participantRole"
                />
                <h3 className="">{option.value}</h3>
                </div>
                
                <input
                  type="text"
                  name="participantRoleOther"
                  placeholder="Please specify"
                  className="border-black p-1 px-4 w-72 rounded text-xl"
                  onChange={(e) => setSurveyForm({...surveyForm, [e.target.name]: e.target.value})}
                />
              </label>
            );
          } else {
            return (
              <label className="flex gap-x-5 items-center">
                <input
                  type="radio"
                  className=" "
                  value={option.value}
                  id={option.id}
                  onChange={handleForm}
                  name="participantRole"
                />
                <h3 className="">{option.value}</h3>
              </label>
            );
          }
        })}

      </div>
    </div>
  );
};
