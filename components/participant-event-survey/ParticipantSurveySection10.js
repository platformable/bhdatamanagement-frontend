import React from "react";

export const ParticipantSurveySection10 = ({surveyForm, setSurveyForm}) => {
  const handleForm = (e) => {
    setSurveyForm({
      ...surveyForm,
      [e.target.name]: e.target.value,
      livingID: Number(e.target.id),
    });
  };
  return (
    <div className="px-7">
      <h1 className="font-black">
        {/* <span className="">10</span>  */}
        What is your living situation today?
      </h1>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        <label className="flex gap-x-5 items-center">
          <input
            type="radio"
            className=""
            value="I have a steady place to live"
            id={1}
            name="participantLiving"
            onChange={handleForm}
          />
          <h3 className="">I have a steady place to live</h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input
            type="radio"
            className=""
            value="I have a place to live today, but I am worried about losing it in the future"
            id={2}
            name="participantLiving"
            onChange={handleForm}
          />
          <h3 className="">
            I have a place to live today, but I am worried about losing it in
            the future
          </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input
            type="radio"
            className=""
            value="I do not have a steady place to live (I am temporarily staying with others, in a hotel, in a shelter, living outside on the street, on a beach, in a car, abandoned building, bus or train station, or in a park)"
            id={3}
            name="participantLiving"
            onChange={handleForm}
          />
          <h3 className="">
            I do not have a steady place to live (I am temporarily staying with
            others, in a hotel, in a shelter, living outside on the street, on a
            beach, in a car, abandoned building, bus or train station, or in a
            park){" "}
          </h3>
        </label>
        <label className="flex gap-x-5 items-center">
          <input
            type="radio"
            className=""
            value="Decline to answer"
            id={4}
            name="participantLiving"
            onChange={handleForm}
          />
          <h3 className="">Decline to answer</h3>
        </label>
      </div>
    </div>
  );
};
