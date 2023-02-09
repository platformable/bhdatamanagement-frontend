import React from "react";

const Fbo = ({ fbos, surveyForm, setSurveyForm }) => {
  console.log();
  const handleForm = (e) => {
    setSurveyForm((prev) => ({ ...prev, fbo: e.target.value }));
  };
  return (
    <div className="question-body">
      <h2 className="font-black">Which FBO are you from?</h2>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="grid gap-5">
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(0, Math.round(fbos.length / 2)).map((fbo, index) => (
          <label className="flex gap-5 items-center">
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo.namefbo}
              onChange={handleForm}
              name="fbo"
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
        </div>
        <div className="grid gap-5">
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(Math.round(fbos.length / 2)).map((fbo, index) => (
          <label className="flex gap-5 items-center">
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo.namefbo}
              onChange={handleForm}
              name="fbo"
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Fbo;

