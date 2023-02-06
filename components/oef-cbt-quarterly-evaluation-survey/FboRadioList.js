import React from "react";

const FboRadioList = ({ fbos,surveyForm,setSurveyForm,stateValue,title }) => {


  return (
    <div className="question-body">
      <h2 className="font-black">{title}</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(0, Math.round(fbos.length / 2)).map((fbo, index) => (
          <label className="flex gap-5 items-center">
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo.namefbo}
              onChange={(e) => setSurveyForm({...surveyForm,[stateValue]:e.target.value})}
              name="fbo"
              defaultChecked={
                fbo.namefbo === surveyForm[stateValue] ? "checked" : ""
              }
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
              onChange={(e) => setSurveyForm({...surveyForm,[stateValue]:e.target.value})}
              name="fbo"
              defaultChecked={
                fbo.namefbo === surveyForm[stateValue] ? "checked" : ""
              }
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FboRadioList;

