import React from "react";

export const ParticipantSurveySection1 = () => {
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
        //   placeholder="Please enter a 5-digit zip code"
          className="border-black rounded px-2 self-start p-1 ml-2 w-60"
          maxlength={5}
          name="zipCode"
          onKeyUp={(e) => {
            e.target.value.length > 5 &&
              (e.target.value = e.target.value.slice(0, 4));
          }}
          onWheelCapture={(e) => e.target.blur()}
        //   onChange={(e) => {
        //     setEventForm((previous) => ({
        //       ...previous,
        //       [e.target.name]: Number(e.target.value),
        //     }));
        //   }}
        />
      </div>
    </div>
  );
};
