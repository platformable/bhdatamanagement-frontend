import React from "react";

const ParticipantSurveySection36 = ({ fbos, surveyForm, setSurveyForm }) => {
  console.log(fbos);
  const handleForm = (e) => {
    setSurveyForm((prev) => ({ ...prev, eventOrganizer: e.target.value }));
  };
  return (
    <div className="px-7">
      <h2 className="font-black">Event organizer:</h2>
      <div className="grid grid-cols-2 mt-7 gap-5">
        {fbos?.map((fbo, index) => (
          <label className="flex gap-5">
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo.namefbo}
              onChange={handleForm}
              name="eventOrganizer"
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ParticipantSurveySection36;
