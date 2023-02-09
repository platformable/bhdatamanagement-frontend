import React from "react";

const ParticipantSurveySection36 = ({ fbos, surveyForm, setSurveyForm }) => {
  console.log();
  const handleForm = (e) => {
    setSurveyForm((prev) => ({ ...prev, deliveryPartner: e.target.value }));
  };
  return (
    <div className="px-7">
      <h2 className="font-black">Event organizer:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-5">
        <div className="grid gap-5">
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(0, Math.round(fbos.length / 2)).map((fbo, index) => (
          <label className="flex gap-5">
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo.namefbo}
              onChange={handleForm}
              name="deliveryPartner"
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
        </div>
        <div className="grid gap-5">
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(Math.round(fbos.length / 2)).map((fbo, index) => (
          <label className="flex gap-5">
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo.namefbo}
              onChange={handleForm}
              name="deliveryPartner"
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipantSurveySection36;
