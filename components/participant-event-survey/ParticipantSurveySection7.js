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
        <span className="">7</span> What is your role?
      </h1>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        {roles.map((option, index) => {
          if (index === roles.length - 1) {
            return (
              <label className="flex gap-x-5 items-center">
                <input
                  type="radio"
                  className="mr-10 "
                  value={option.value}
                  id={option.id}
                  onChange={handleForm}
                  name="participantRole"
                />
                <h3 className="">{option.value}</h3>
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
                  className="mr-10 "
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

        <label className="flex gap-x-5 items-center">
          <input
            type="radio"
            className="mr-10 w-6 h-6"
            value="Decline to answer"
            onChange={handleForm}
            name="participantRole"
          />
          <p className="">Decline to answer </p>
        </label>
      </div>
    </div>
  );
};
