import React from "react";

const FboRadioList = ({ fbos, surveyForm,dispatch,updateFbo,stateValue }) => {

  const handleForm = (e, borough) => {
    dispatch(updateFbo({fbo:e.target.value}))
    dispatch(updateFbo({boroughFbo: borough}))
  };
  return (
    <div className="question-body">
      <h2 className="font-black">FBO Name</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid gap-5">
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(0, Math.round(fbos.length / 2)).map((fbo, index) => (
          <label className="flex gap-5 items-center">
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo.namefbo}
              onChange={(e) => handleForm(e, fbo.boroughfbo)}
              name="fbo"
              checked={
                fbo.namefbo === surveyForm.fbo ? "checked" : ""
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
              onChange={(e) => handleForm(e, fbo.boroughfbo)}
              name="fbo"
              checked={
                fbo.namefbo === surveyForm.fbo ? "checked" : ""
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

