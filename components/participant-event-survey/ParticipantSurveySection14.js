import React from "react";

export const ParticipantSurveySection14 = () => {
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">14</span> Please indicate what type of Health Insurance you have:
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantInsurance"/>
          <p className="">Private </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantInsurance"/>
          <p className="">Public  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantInsurance"/>
          <p className="">Both Private and Public </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantInsurance"/>
          <p className="">Uninsured  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantInsurance"/>
          <p className="">Not Sure  </p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantInsurance"/>
          <p className="">Decline to answer </p>
        </label>
        
      </div>
    </div>
  );
};
