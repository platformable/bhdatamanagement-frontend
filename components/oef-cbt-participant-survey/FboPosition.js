import React from "react";

const FboPosition = ({ surveyForm, setSurveyForm }) => {
  console.log();
  const handleForm = (e) => {
    setSurveyForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const fbosPosition = [
    "Leader (Pastor, Imam, Deacon)",
    "Coordinator",
    "Youth Leader",
    "Representative",
    "Community Member",
  ]
  return (
    <div className="question-body">
      <h2 className="font-black">What is your position/title in the FBO?</h2>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="grid gap-5">
        {fbosPosition?.slice(0, Math.round(fbosPosition.length / 2)).sort((a, b) => a.localeCompare(b, 'en')).map((fbo, index) => (
          <label className="flex gap-5 items-center" key={index}>
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo}
              onChange={handleForm}
              name="fboPosition"
            />
            <p className="">{fbo}</p>
          </label>
        ))}
        </div>
        <div className="grid gap-5" >
        {fbosPosition?.slice(Math.round(fbosPosition.length / 2)).sort((a, b) => a.localeCompare(b, 'en')).map((fbo, index) => (
          <label className="flex gap-5 items-center" key={index}>
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo}
              onChange={handleForm}
              name="fboPosition"
            />
            <p className="">{fbo}</p>
          </label>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FboPosition;

